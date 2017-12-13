var express = require('express');
var app = express();

var teachers = require('./routes/teacher'); 

app.use('/api', teachers);

module.exports = app;