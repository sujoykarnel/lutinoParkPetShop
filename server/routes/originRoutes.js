import express from "express";
const router = express.Router();
import { createOrigin, getOrigins } from "../controllers/originController.js";

// routes
router.get("/", getOrigins);
router.post("/admin", createOrigin);

export default router;
