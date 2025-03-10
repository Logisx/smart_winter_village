import { Router } from "express";
import { getRooms, requestFrozenPathUpdate } from "../controllers/roomController.mjs";

const router = Router();
router.get("/", getRooms);
router.post("/frozen-path/update", requestFrozenPathUpdate);

export default router;
