'use strict';
// Load express library
const express = require('express');

const bodyParser = require('body-parser');

// Loads the controllers 
// -> these are the functions that are executed by each route
const controllers = require('./controllers')

// Initialize express middleware
const app = express();

// This is the static middleware which exposes all files from 
// this folder to be accessible by the outside world as endpoints

// example: 
// by adding app.use(express.static('./dist'))
// if we have a file at location ./dist/index.html 
// we can now access it by making a GET request
// to localhost:3000/index.html 

app.use(express.static('./dist'));
app.use(bodyParser.json());

app.get('/todos', controllers.todos.getTodos);
app.get('/todo/:id', controllers.todos.getTodo);
app.post('/todo', controllers.todos.postTodo);
app.put('/todo', controllers.todos.updateTodo);

module.exports = app;