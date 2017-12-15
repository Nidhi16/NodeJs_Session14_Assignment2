var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var teachers = require('./routes/teacher');

var app = express();

//connect to our database

var dbName='teacherDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', teachers);

module.exports = app;