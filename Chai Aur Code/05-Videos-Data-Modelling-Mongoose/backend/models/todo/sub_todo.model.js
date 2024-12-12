import mongoose from "mongoose";

const subTodoShema = new mongoose.Schema({}, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subTodoShema);
