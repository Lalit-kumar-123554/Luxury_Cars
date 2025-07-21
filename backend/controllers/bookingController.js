const Booking = require("../models/Booking");

// POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { carId, pickupLocation, dropoffLocation, date } = req.body;

    if (!carId || !pickupLocation || !dropoffLocation || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({
      carId,
      pickupLocation,
      dropoffLocation,
      date,
    });

    const savedBooking = await newBooking.save();
    // console.log("✅ Booking saved to DB:", savedBooking);
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("❌ Booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
