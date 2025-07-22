// ✅ Import only ONCE at the top
const Booking = require("../models/Booking");

// POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { carId, model, pickupLocation, dropoffLocation, date, hourlyPrice, features } = req.body;

    if (!carId || !model || !pickupLocation || !dropoffLocation || !date || !hourlyPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const inputDate = new Date(date);
    const utcDate = new Date(inputDate.getTime() - inputDate.getTimezoneOffset() * 60000);
    const newBooking = new Booking({
      carId,
      model,
      pickupLocation,
      dropoffLocation,
      date :utcDate,
      hourlyPrice,
      features,
    });

    await newBooking.save();

    // console.log("Booking saved:", newBooking);
    res.status(201).json({ message: "Booking successful", data: newBooking });

  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: error.message });
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
