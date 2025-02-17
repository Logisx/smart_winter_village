import { Router } from "express";
import { getCurrentWeather, getWeatherForecast } from "../controllers/weatherController.mjs";

const router = Router();
router.get("/current", getCurrentWeather);
router.get("/forecast", getWeatherForecast);

export default router;