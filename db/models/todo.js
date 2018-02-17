const mongoose = require('mongoose');

// create a schema
var TodoSchema = mongoose.Schema({
  name: String,
  date: { type : Date, default: Date.now },
  complete: { type : Boolean, default: false }
});
  
// create our model with the schema
var Todo = mongoose.model('Todo', TodoSchema);
  
module.exports = Todo