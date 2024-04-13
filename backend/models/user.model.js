import { Schema, model } from "mongoose";

// Define the schema for the User model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'restaurant_owner'],
        default: 'customer'
    }
});

// Create and export the User model
export const User = model('User', userSchema);
