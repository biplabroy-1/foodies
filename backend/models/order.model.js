import { Schema, model } from "mongoose";

// Define the schema for the Order model
const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    restaurant: {
        type: Schema.Types.ObjectId,
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
export default model('Order', orderSchema);
