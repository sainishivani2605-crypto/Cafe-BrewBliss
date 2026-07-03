const express = require("express");
const router = express.Router();
const About = require("../models/About");

// Get About Data
router.get("/", async (req, res) => {
  try {
    const data = await About.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;