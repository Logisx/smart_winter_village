import { Router } from "express";
import vibeRoutes from "./vibe.mjs";
import weatherRoutes from "./weather.mjs";
import roomRoutes from "./rooms.mjs";
import musicRoutes from "./music.mjs";

const router = Router();
router.use("/vibe", vibeRoutes);
router.use("/weather", weatherRoutes);
router.use("/rooms", roomRoutes);
router.use("/music", musicRoutes);

export default router;
