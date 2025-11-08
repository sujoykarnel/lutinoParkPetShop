import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// Internal Modules
import materialRoutes from "./routes/materialRoutes.js";
import uomRoutes from "./routes/uomRoutes.js";
import originRoutes from "./routes/originRoutes.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// connected message
app.get("/", (req, res) => {
  res.json({ message: "API Server Running." });
});

// Routes
app.use("/api/uoms", uomRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/origins", originRoutes);

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
