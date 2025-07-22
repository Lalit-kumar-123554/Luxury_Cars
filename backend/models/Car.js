const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String,
  image: String,
  fuelType: String,
  transmission: String,
  seats: Number,
  speed: String,
  price: Number,
  hourlyPrice: Number, //  must be included
  features: [String],
});

module.exports = mongoose.model("Car", carSchema);
