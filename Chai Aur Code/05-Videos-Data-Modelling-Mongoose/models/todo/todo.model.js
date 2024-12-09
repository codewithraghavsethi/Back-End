import mongoose from "mongoose";

const todoShema = new mongoose.Schema({

    content:{
        type : String,
        required : true,
    },
    complete: {
        type : Boolean,
        default: false,
    }
}, { timestamps: true });

export const todo = mongoose.model("Todo", todoShema);
