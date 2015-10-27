// Dependencies
var express = require('express');
var async = require('async');
var router = express.Router();

// Models
//var Locations = require('../models/locations');
var Accounts = require('../models/accounts');

// Routes
Accounts.methods(['get', 'put', 'post', 'delete']);
Accounts.register(router, '/accounts');

// Return router
module.exports = router;