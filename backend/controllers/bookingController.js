const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const {
      carId,
      model,
      pickupLocation,
      dropoffLocation,
      date,
      hourlyPrice,
      features,
    } = req.body;

    if (!carId || !model || !pickupLocation || !dropoffLocation || !date || !hourlyPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({
      carId,
      model,
      pickupLocation,
      dropoffLocation,
      date,
      hourlyPrice,
      features,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful", data: newBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
