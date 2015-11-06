var async = require('async');

var Tweets = require('../models/tweets');
Tweets.methods(['get', 'put', 'post', 'delete']);

module.exports = Tweets;