//import mongoose
const mongoose = require("mongoose");

//create an schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  date: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
},{timestamps:true});

//create an model
const projects=mongoose.model("projects",projectSchema);

//export model
module.exports=projects;
