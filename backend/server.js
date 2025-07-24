const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/newsletter", newsletterRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
