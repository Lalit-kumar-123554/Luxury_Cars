 
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");
require("dotenv").config();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

// Connect to MongoDB
dotenv.config();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/bookings", require("./routes/bookingRoutes")); // if using

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
