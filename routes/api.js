// Dependencies
var express = require('express');
var async = require('async');
var router = express.Router();

// New Object methods
Array.prototype.add = function (elem) {
    this.reverse();
    this.push(elem);
    this.reverse();
};

// Models
var Pages = require('../models/pages');
var Tweets = require('../models/tweets');
var Accounts = require('../models/accounts');

// Routes
Pages.methods(['get', 'put', 'post', 'delete']);
Pages.register(router, '/pages');
Tweets.methods(['get', 'put', 'post', 'delete']);
Tweets.register(router, '/tweets');
Accounts.methods(['get', 'put', 'post', 'delete']);
Accounts.register(router, '/accounts');

// Return router
module.exports = router;
