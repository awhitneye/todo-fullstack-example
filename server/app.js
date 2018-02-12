'use strict';
// Load express library
const express = require('express');

// Loads the controllers 
// -> these are the functions that will be executed by route
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

app.use('/hello_world', controllers.helloWorld);

module.exports = app;