import { publishMQTTMessage } from "../config/mqtt.mjs";

export const getRooms = (req, res) => {
    res.json([
        { name: "Room1", temperature: 22, humidity: 45 },
        { name: "Room2", temperature: 21, humidity: 47 }
    ]);
};

// Request an update from the frozen path sensor
export const requestFrozenPathUpdate = (req, res) => {
    publishMQTTMessage("sensor/frozen-path/request", "update");
    res.json({ message: "Requested frozen path status update" });
};
