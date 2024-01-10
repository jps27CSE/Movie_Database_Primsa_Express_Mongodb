import { Router } from "express";
import movieRoutes from "./movieRoutes.js";

const router = Router();

router.use("/api/movie", movieRoutes);

export default router;
