'use strict';

// Loads app.js found in current directory
const app = require('./app');

// ../db => directory path is one level up in the /db directory
//  If require is passed a directory as the path it will load index.js inside the directory 
const db = require('../db');

// Use either a port defined as a global variable or 3000
const PORT = process.env.port || 3000;

// Starts the server!
app.listen(PORT, () => {
  // callback function is triggered when server successfully starts
  console.log('Example app listening on port 3000!');
});
