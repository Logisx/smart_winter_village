import { Router } from "express";
import { getRooms } from "../controllers/roomController.mjs";

const router = Router();
router.get("/", getRooms);

export default router;