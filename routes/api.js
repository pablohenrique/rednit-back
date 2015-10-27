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
//var Locations = require('../models/locations');
var Accounts = require('../models/accounts');

// Routes
Accounts.methods(['get', 'put', 'post', 'delete']);
Accounts.register(router, '/accounts');

// Return router
module.exports = router;