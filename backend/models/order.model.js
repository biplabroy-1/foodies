const mongoose = require('mongoose');

// Define the schema for the Order model
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    items: [{
        name: String,
        quantity: Number,
        price: Number
    }],
    total: {
        type: Number,
        required: true
    },
    // Add other fields as needed
});

// Create and export the Order model
module.exports = mongoose.model('Order', orderSchema);
