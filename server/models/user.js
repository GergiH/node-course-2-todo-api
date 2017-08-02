var mongoose = require('mongoose');

// 'Model' creation for the user collection(table)
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1, // Doesn't accept empty strings
    trim: true // Remove whitespaces in-front and after the text
  }
});

module.exports = {User};
