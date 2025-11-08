import express from "express";
const router = express.Router();
import {
  createMaterial,
  getMaterials,
} from "../controllers/materialController.js";

// routes
router.get("/", getMaterials);
router.post("/admin", createMaterial);

export default router;
