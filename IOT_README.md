# Smart Winter Village – Embedded Controller
This is the **embedded firmware** for the Smart Winter Village project, running on a Raspberry Pi Pico with MicroPython.  
It handles MQTT communication with the server, controls decorative lighting and music playback, and monitors road temperature using an infrared sensor.

---
### Features
- 🎵 **Music Playback**  
  Plays short WAV samples in response to MQTT commands (future: AI-generated music streamed live).

- 🌈 **LED Light Control**  
  Remote control of RGB LED colors (NeoPixels) with supported separate LEDs.

- 🌡️ **Road Temperature Monitoring**  
  Uses an MLX90614 infrared sensor to measure and report surface temperature.

- 📡 **MQTT Communication**  
  Subscribes to command topics (sound/light) and publishes temperature data. Integrates with InfluxDB via Telegraf.

### Folder Structure
```bash
smart-winter-village-embedded/
├── umqtt/
│   └── simple.py
├── config.py
├── config.py.example
├── main.py
├── mlx90614.py
├── mqtt_utils.py
├── network_utils.py
├── sensor_utils.py
├── track1.wav
├── track2.wav
├── track3.wav
├── track4.wav
```
### Setup Instructions

#### 1. Flash MicroPython
Flash the latest MicroPython firmware to your Raspberry Pi Pico using [Thonny](https://thonny.org/) or another flashing tool.

#### 2. Clone the repository
```bash
git clone https://github.com/Iaraslav/smart-winter-village-embedded.git
cd smart-winter-village-embedded
```
#### 3. Create and configure config.py

```bash
cp config.py.example config.py
```
```py
#config.py
ssid = "YourWiFiSSID"
password = "YourWiFiPassword"

MQTT_BROKER = "YourBrokerIP"
MQTT_PORT = 1883 # Your Broker Port (1883 - Default)

MQTT_LED_TOPIC = "cabin/led"
MQTT_SOUND_TOPIC = "cabin/sound"
MQTT_TOPIC_TEMP = "sensors/temperature"
```

#### 4. Upload files to Pico

### MQTT Topics

| Topic              | Direction | Example                 | Description                                   |
|--------------------|-----------|-------------------------|-----------------------------------------------|
| cabin/led          | IN        | {"r":255,"g":0,"b":128} | Sets all LEDs to given color                  |
| cabin/sound        | IN        | {"track":1}             | Play `track1.wav` from the Pico storage       |
| sensor/temperature | OUT       | {"value": -3.4}         | Sends temperature every N seconds (default 5) |

### Wiring

#### MLX90614 (Infrared Temperature Sensor)

- **VCC (5V)** → `VBUS or VSYS`  
  *(Use VBUS/VSYS for 5V version. If using 3.3V version, connect to `3V3`)*
- **SDA** → `GP4`
- **SCL** → `GP5`
- **GND** → `GND`

---

#### Speaker (with built-in amplifier or headphones)

- **Signal** → `GP15`
- **Ground** → `GND`
