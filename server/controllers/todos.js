const models = require("../../db").models;

// Request handler that fetches all todos
module.exports.getTodos = function (req,res) {
  models.Todo.find({}, (err, data)=> {
    if (err) {
      res.send(err);
      return
    }
    res.send(data);
  });
};

// Request handler that creates a new todo
module.exports.postTodo = function (req,res) {
  new models.Todo({
    name: req.body.name
  }).save((err, data)=> {
    if (err) {
      res.status(500).send(err);
      return
    }
    res.send(data);
  });
};

// Request handler that updates a new todo
module.exports.updateTodo = function (req, res) {
  models.Todo.findOneAndUpdate({name: req.body.name}, req.body, {new: true})
    .then((todo) => {
      res.send(todo);
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).send(err);
    });
}
