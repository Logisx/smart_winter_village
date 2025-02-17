import { Router } from "express";
import vibeRoutes from "./vibe.mjs";
// import sensorRoutes from "./sensors.mjs"; // to be implemented
// import authRoutes from "./auth.mjs"; // to be implemented
import weatherRoutes from "./weather.mjs";
import roomRoutes from "./rooms.mjs";
import musicRoutes from "./music.mjs";

const router = Router();
router.use("/vibe", vibeRoutes);
// router.use("/sensors", sensorRoutes);
// router.use("/auth", authRoutes);
router.use("/weather", weatherRoutes);
router.use("/rooms", roomRoutes);
router.use("/music", musicRoutes);


export default router;