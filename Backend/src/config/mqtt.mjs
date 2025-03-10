import mqtt from "mqtt";
import dotenv from "dotenv";

dotenv.config();

const client = mqtt.connect(process.env.MQTT_BROKER||"mqtt://test.mosquitto.org");

client.on("connect", () => {
    console.log("Connected to MQTT Broker");

    
    client.subscribe("sensor/frozen-path", (err) => {
        if (!err) console.log("Subscribed to sensor/frozen-path");
    });

    client.subscribe("vibe/control", (err) => {
        if (!err) console.log("Subscribed to vibe/control");
    });
});

// Handle incoming messages
client.on("message", (topic, message) => {
    console.log(`Received message from ${topic}: ${message.toString()}`);

    if (topic === "sensor/frozen-path") {
        handleFrozenPathUpdate(message.toString());
    } else if (topic === "vibe/control") {
        handleVibeControl(message.toString());
    }
});

// Store frozen path sensor updates
const handleFrozenPathUpdate = (data) => {
    console.log("Processing frozen path data:", data);
    // TODO: Store in InfluxDB later
};

// Handle vibe system control
const handleVibeControl = (command) => {
    console.log("Processing vibe command:", command);
    // TODO: Send to the vibe system actuator
};

// Function to publish messages (used by controllers)
export const publishMQTTMessage = (topic, message) => {
    client.publish(topic, message, () => {
        console.log(`Published message to ${topic}: ${message}`);
    });
};

export default client;
