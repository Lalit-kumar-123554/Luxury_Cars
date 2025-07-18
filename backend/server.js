const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);
// Routes
app.use("/api/cars", require("./routes/carRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
