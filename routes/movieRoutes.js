import { Router } from "express";
import {
  deleteMovie,
  getAll,
  search,
  store,
  update,
} from "../controllers/MovieController.js";

const router = Router();

router.post("/", store);
router.get("/", getAll);
router.get("/search", search);
router.put("/:id", update);
router.delete("/:id", deleteMovie);

export default router;
