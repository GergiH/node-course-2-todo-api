var mongoose = require('mongoose');

// 'Model' creation for the todo collection(table)
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1, // Doesn't accept empty strings
    trim: true // Remove whitespaces in-front and after the text
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
