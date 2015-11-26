var async = require('async');

var Tweets = require('../models/tweets');
//Tweets.methods(['get', 'put', 'delete']);
Tweets.methods(['get', 'put', 'post', 'delete']);


//Tweets.route('missing.get',{
//    detail: false,
//    handler: function(req, res, next) {
//
//        var queryTweets = (req.query.tweets).split(",");
//
//        Tweets.
//
//    }
//});


module.exports = Tweets;