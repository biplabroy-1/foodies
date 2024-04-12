const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Load environment variables from .env file if present
require('dotenv').config();

// Middleware
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
});

// Define routes
const userRoutes = require('./routes/userRoutes.js');
const restaurantRoutes = require('./routes/restaurantRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');

app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
