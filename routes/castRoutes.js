import { Router } from "express";
import { getAllCast, store } from "../controllers/CastController.js";

const router = Router();

router.get("/", getAllCast);
router.post("/", store);

export default router;
