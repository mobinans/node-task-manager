const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide task"],
    trim: true,
    maxlength: [20, "task can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
