// achievementRoutes.js
const express = require("express");
const router = express.Router();
const Achievement = require("../models/Achievement");

// Route to get all achievements
router.get("/", async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add a new achievement
router.post("/", async (req, res) => {
  const { title, description, image } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const achievement = new Achievement({
    title,
    description,
    image,
  });

  try {
    const newAchievement = await achievement.save();
    res.status(201).json(newAchievement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; // Ensure this line is there
