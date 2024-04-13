import mongoose from "mongoose";

const dbConnect = mongoose.connect('mongodb://127.0.0.1:27017/foodie')


export default dbConnect;
