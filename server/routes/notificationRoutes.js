// notificationRoutes.js
const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// Route to get all notifications
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add a new notification
router.post("/", async (req, res) => {
  const notification = new Notification({
    title: req.body.title,
    message: req.body.message,
    date: req.body.date || Date.now(),
  });

  try {
    const newNotification = await notification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; // Ensure the router is exported
