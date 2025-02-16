import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.mjs';

const { expect } = chai;
chai.use(chaiHttp);

describe('API Endpoints', () => {
  // Weather Endpoints
  describe('Weather API', () => {
    it('GET /api/weather/current - should return current weather', async () => {
      const res = await chai.request(app).get('/api/weather/current');
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys(['temperature', 'condition', 'unit']);
      expect(res.body.temperature).to.be.a('number');
    });

    it('GET /api/weather/forecast - should return weather forecast', async () => {
      const res = await chai.request(app).get('/api/weather/forecast'); 
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array').with.lengthOf(4);
      expect(res.body[0]).to.have.keys(['day', 'temp', 'condition']);
    });
  });

  // Room Endpoints
  describe('Room API', () => {
    it('GET /api/rooms - should return room status', async () => {
      const res = await chai.request(app).get('/api/rooms'); 
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array').with.lengthOf(2);
      expect(res.body[0]).to.have.keys(['name', 'temperature', 'humidity']);
    });
  });

  // Vibe Settings Endpoints
  describe('Vibe API', () => {
    it('GET /api/vibe/settings - should return vibe settings', async () => {
      const res = await chai.request(app).get('/api/vibe/settings'); 
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys(['archianceLevel', 'music', 'diffuser', 'led']);
      expect(res.body.diffuser.intensity).to.be.a('number');
    });

    it('PUT /api/vibe/settings - should update vibe settings', async () => {
      const payload = {
        archianceLevel: "Custom",
        diffuser: { intensity: 60 }
      };
      
      const res = await chai.request(app) 
        .put('/api/vibe/settings')
        .send(payload);
      
      expect(res).to.have.status(200);
      expect(res.body.archianceLevel).to.equal('Custom');
      expect(res.body.diffuser.intensity).to.equal(60);
    });
  });

  // Music Endpoints
  describe('Music API', () => {
    it('GET /api/music - should return music status', async () => {
      const res = await chai.request(app).get('/api/music'); 
      expect(res).to.have.status(200);
      expect(res.body).to.have.keys([
        'playing', 'currentTime', 'totalTime', 'track', 'artist'
      ]);
    });

    it('POST /api/music/control - should control music player', async () => {
      const res = await chai.request(app) 
        .post('/api/music/control')
        .send({ action: 'play' });
      
      expect(res).to.have.status(200);
      expect(res.body.message).to.match(/Music .* successful/);
    });
  });
});