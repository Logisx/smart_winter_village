import { Router } from "express";
import { getMusicStatus, controlMusic } from "../controllers/musicController.mjs";

const router = Router();
router.get("/", getMusicStatus);
router.post("/control", controlMusic);

export default router;