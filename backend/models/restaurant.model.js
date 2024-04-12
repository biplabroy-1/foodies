const mongoose = require('mongoose');

// Define the schema for the Restaurant model
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Add other fields as needed
});

// Create and export the Restaurant model
module.exports = mongoose.model('Restaurant', restaurantSchema);
