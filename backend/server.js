require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const menuRoutes = require("./routes/menuRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
console.log("my mongo uri is : ",process.env.MONGO_URI);
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://deepikanagotra2006_db_user:deepi3003@cluster0.lsaknvg.mongodb.net/Cafe-BrewBliss?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("🟢 MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Database Connection Error:", err);
  });
// Routes

app.use("/api/menu", menuRoutes);
app.use("/api/about", aboutRoutes);
// Home Route
app.get("/", (req, res) => {
  res.send("☕ Brew Bliss Cafe Backend is Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
