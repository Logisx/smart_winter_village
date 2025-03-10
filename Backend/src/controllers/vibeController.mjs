import { publishMQTTMessage } from "../config/mqtt.mjs";

export const getVibeSettings = (req, res) => {
    res.json({
        ambianceLevel: "Fairy",
        music: {
            currentTrack: "Lavender Dreams",
            progress: "03:50",
            album: "Room Diffuser"
        },
        diffuser: {
            intensity: 50,
            mode: "Medium"
        },
        led: {
            status: "on",
            brightness: 75,
            color: "#E0B0FF"
        }
    });
};

// Update vibe settings and send commands to MQTT
export const updateVibeSettings = (req, res) => {
    const { action } = req.body;
    publishMQTTMessage("vibe/control", action);
    res.json({ message: "Vibe settings updated", action });
};
