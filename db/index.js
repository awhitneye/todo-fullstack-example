const mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/todos');
db.on('open', () => {
  console.log("Sucessful Connection to MongoDB");
});

module.exports.db = db;
module.exports.models = require('./models');