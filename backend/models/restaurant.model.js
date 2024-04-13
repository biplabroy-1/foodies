import { Schema, model } from "mongoose";

// Define the schema for the Restaurant model
const restaurantSchema = new Schema({
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
export const Restaurant = model('Restaurant', restaurantSchema);
