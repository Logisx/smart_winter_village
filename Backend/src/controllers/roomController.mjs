export const getRooms = (req, res) => {
    res.json([
        { name: "Room1", temperature: 22, humidity: 45 },
        { name: "Room2", temperature: 21, humidity: 47 }
    ]);
};