const express = require('express');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
require('dotenv').config();

// Connect to DB
connectDB();

const app = express();

app.use(express.json());

// Routes
app.use('/api', cryptoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
