export const getCurrentWeather = (req, res) => {
    res.json({
        temperature: 21,
        condition: "Sunny",
        unit: "°C"
    });
};

export const getWeatherForecast = (req, res) => {
    // Todo: Implement weather forecast logic
    res.json([
        { day: "Tue", temp: 10, condition: "Rain" },
        { day: "Wed", temp: 10, condition: "Cloudy" },
        { day: "Thu", temp: 15, condition: "Sunny" },
        { day: "Fri", temp: 11, condition: "Windy" }
    ]);
};