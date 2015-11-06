var async = require('async');

var Pages = require('../models/pages');
Pages.methods(['get', 'put', 'post', 'delete']);

module.exports = Pages;