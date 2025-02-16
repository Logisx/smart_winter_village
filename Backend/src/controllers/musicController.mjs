export const getMusicStatus = (req, res) => {
    res.json({
        playing: true,
        currentTime: "03:50",
        totalTime: "23:00",
        track: "Lavender Dreams",
        artist: "Ambient Waves"
    });
};

export const controlMusic = (req, res) => {
    const { action } = req.body;
    // Todo: Implement music control logic
    res.json({ message: `Music ${action} successful` });
};