const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: "Booking failed", message: err.message });
  }
};
exports.getAllBookings=async (req,res)=>{
  try{
    const bookings=await Booking.find();
    res.status(200).json(bookings);
  }catch(error){
   res.status(500).json({error:error.message});
  }
};