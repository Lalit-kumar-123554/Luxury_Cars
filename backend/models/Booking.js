const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  pickupLocation: String,
  dropoffLocation: String,
  date: Date,
});

module.exports = mongoose.model("Booking", bookingSchema);
