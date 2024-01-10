import { Router } from "express";
import movieRoutes from "./movieRoutes.js";
import castRoutes from "./castRoutes.js";

const router = Router();

router.use("/api/movie", movieRoutes);
router.use("/api/cast", castRoutes);

export default router;
