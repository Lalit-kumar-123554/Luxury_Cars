const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); // Load .env

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
