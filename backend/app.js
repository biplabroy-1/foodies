const express = require('express');
const mongoose = require('mongoose');
const auth = require('./config/auth');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');
const User = require('../models/user.models.js');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});

// Routes
// app.use('/api/users', userRoutes);
// app.use('/api/restaurants', auth.verifyToken, restaurantRoutes);
// app.use('/api/orders', auth.verifyToken, orderRoutes);

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
