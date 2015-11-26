// Dependencies
var express = require('express');
var router = express.Router();

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

// Routes
var Accounts = require('./accounts');
Accounts.register(router, '/accounts');

var Pages = require('./pages');
Pages.register(router, '/pages');

var Tweets = require('./tweets');
Tweets.register(router, '/tweets');

// Return router
module.exports = router;
