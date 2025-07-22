const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  carId: { type: String, required: true },
  model: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  date: { type: Date, required: true },
  hourlyPrice: { type: Number, required: true },
  features: { type: [String], required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
