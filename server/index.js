const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT || 5000;

// Internal Modules
// const unitRouter = require("./router/unitRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (req, res) => {
  res.json({ message: "API Server Running" });
});

// Route setup
// app.use("/api/units", unitRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
