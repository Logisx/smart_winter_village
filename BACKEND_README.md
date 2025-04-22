# Smart Winter Village — Backend

This backend system powers the Smart Winter Village project, enabling real-time communication between IoT devices, guests, and external APIs such as weather and aurora forecasts. Built with **Node.js**, it serves RESTful APIs and MQTT-based controls for a real-time smart environment experience.

---

##  Core Features

- **Weather Forecasting** – Current, hourly, and daily via OpenWeather
- **Aurora Prediction** – Scrapes and calls api from FMI for aurora visibility data
- **Ice Path Detection** – Uses InfluxDB sensor data to detect icy conditions
- **Mood-Based Cabin Control** – Lighting and music control via MQTT
- **Guest Service Requests** – RESTful form submission with tracking
- **Systemd Deployment** – Stable VM service managed by `systemctl`

---

## Project Structure

```
Backend/
├── controllers/           # All route logic and processing
│   ├── weatherController.mjs
│   ├── auroraController.mjs
│   ├── temperatureController.mjs
│   ├── vibeController.mjs
│   └── guestServiceController.mjs
├── routes/                # Route modules
│   └── *.mjs
├── services/              # External APIs or scrapers
├── utils/                 # Utility helpers
├── .env                   # Environment configuration
├── app.mjs                # Express app setup
└── server.mjs             # Entry point for systemd
```

---

##  Environment Setup

Create a `.env` file in the root:

```env
OPENWEATHER_API_KEY=your_openweather_api_key
DB_INFLUX_TOKEN=your_influxdb_token
```

---

## API Reference

### Weather

- `GET /api/weather/current` – Current weather + daily summary
- `GET /api/weather/hourly` – Hourly forecast
- `GET /api/weather/daily` – 3-day forecast

### Aurora

- `GET /api/aurora/forecast` – Returns aurora prediction

### Ice Detection

- `GET /api/temperature/ice-status` – Detects if ice is present on path

### Mood Control

- `POST /api/vibe/update`

```json
{ "mood": "calm" }
```

### Guest Services

- `POST /api/guest/service`

```json
{
  "title": "Extra towels",
  "description": "Request for additional towels"
}
```

- `GET /api/guest/service` – Returns all submitted guest requests

---

## MQTT Topics

| Topic                  | Direction | Format                              |
|------------------------|-----------|--------------------------------------|
| `cabin/led`            | Publish   | `{ "r": 255, "g": 255, "b": 0 }`     |
| `cabin/sound`          | Publish   | `{ "track": 3 }`                     |

---

## Deployment with Systemd

**Systemd Unit File:**

```ini
[Unit]
Description=Backend Service for 24/7
After=network.target

[Service]
ExecStart=/home/youruser/.nvm/versions/node/vXX.X.X/bin/node /path/to/server.mjs
Restart=on-failure
User=youruser
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

**Commands:**

```bash
sudo systemctl daemon-reload
sudo systemctl enable backend.service
sudo systemctl start backend.service
sudo journalctl -u backend.service -f
```

---

##  Team & Contributions

- **Backend:** Abhishek Adhikari
- **Collaborators:** Frontend, AI, and Embedded teams
- **Project:** Smart Winter Village Hackathon 2025

---

##  License

This project is intended for academic and demo purposes only.