import express from "express";
const router = express.Router();
import {
  createMaterial,
  deleteMaterial,
  getMaterial,
  getMaterials,
  updateMaterial,
} from "../controllers/materialController.js";

// routes
router.get("/", getMaterials);
router.get("/:id", getMaterial);
router.post("/", createMaterial);
router.patch("/:id", updateMaterial);
router.delete("/:id", deleteMaterial);

export default router;
