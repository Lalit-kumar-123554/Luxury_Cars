const Newsletter = require("../models/Newsletter");

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    const exists = await Newsletter.findOne({ email });
    if (exists) return res.status(400).json({ message: "Already subscribed" });

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
