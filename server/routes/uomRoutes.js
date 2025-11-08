import express from "express";
const router = express.Router();
import { createUom, getUoms } from "../controllers/uomController.js";

// routes
router.get("/", getUoms);
router.post("/admin", createUom);

export default router;
