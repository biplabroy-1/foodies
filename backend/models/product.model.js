import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    prize:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String
    },
    inStock:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    catagory:{
        type:Schema.Types.ObjectId,
        ref:'Catagory'
    }
},{timestaps: true})

export default model('Product',productSchema);