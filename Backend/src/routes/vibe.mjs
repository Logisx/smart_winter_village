import { Router } from "express";
import { getVibeSettings, updateVibeSettings } from "../controllers/vibeController.mjs";

const router = Router();
router.get("/settings", getVibeSettings);
router.put("/settings", updateVibeSettings);

export default router;
