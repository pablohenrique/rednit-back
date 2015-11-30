var async = require('async');

var Likes = require('../models/likes');
Likes.methods(['get', 'put', 'post', 'delete']);

module.exports = Likes;