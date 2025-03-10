import mqtt from "mqtt";

const client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", () => {
    console.log("✅ Connected to MQTT Broker");
    client.end(); // Close connection after success
});

client.on("error", (err) => {
    console.error("❌ MQTT Connection Error:", err);
});
