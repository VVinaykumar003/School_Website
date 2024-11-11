// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const achievementRoutes = require("./routes/achievementRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const eventRoutes = require("./routes/eventRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Connect to MongoDB using the DATABASE_URL from .env
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle errors and successful connection
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to Database"));

// Register Routes
app.use("/api/achievements", achievementRoutes); // Achievement routes
app.use("/api/notifications", notificationRoutes); // Notification routes
app.use("/api/events", eventRoutes); // Event routes
app.use("/api/auth", authRoutes); // Auth routes

// Start the server using PORT from .env or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
