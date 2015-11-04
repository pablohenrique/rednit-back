// ** Dependencies **
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

// ** Constants **
var PORT = 3000;

// ** MongoDB **
// Don't worry, fucker. If the Database DOES NOT exist,
// mongoose will take care of that. Fucking awesome, right?
mongoose.connect('mongodb://localhost/rednitbackend');

// ** Express **
// This object is responsible to run express.
// This is THE shit.
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(PORT);
console.log('API is running on port ' + PORT);
