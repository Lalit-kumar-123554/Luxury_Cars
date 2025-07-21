const Booking = require("../models/Booking");

// POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    console.log("Booking request body:", req.body);
    const { carId, model, pickupLocation, dropoffLocation, date, hourlyPrice,features } = req.body;

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

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: err.message });
  }
};
