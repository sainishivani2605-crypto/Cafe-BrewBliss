require("dotenv").config();

const userRoutes = require('./routes/userRoutes');
const express = require("express");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const staffRoutes = require("./routes/staffRoutes");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
app.use("/api/users",userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/analytics", analyticsRoutes);



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const menuRoutes = require("./routes/menuRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
console.log("my mongo uri is : ",process.env.MONGO_URI);
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://deepikanagotra2006_db_user:gudiadeepi@cluster0.lsaknvg.mongodb.net/Cafe-BrewBliss?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("🟢 MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Database Connection Error:", err);
  });
// Routes

app.use("/api/menu", menuRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);
// Home Route
app.get("/", (req, res) => {
  res.send("☕ Brew Bliss Cafe Backend is Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

