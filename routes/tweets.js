var async = require('async');

var Tweets = require('../models/tweets');
//Tweets.methods(['get', 'put', 'delete']);
Tweets.methods(['get', 'put', 'post', 'delete']);

Tweets.route('missing.get',{
    detail: false,
    handler: function(req, res, next) {
        var queryTweets = (req.query.tweets);

        if(!queryTweets.contains(",")){
            res.status(500).json("Nope... Try again.");
        } else {
            queryTweets = queryTweets.split(",");
            var missing = [];

            Tweets.find().exec(function (err, results) {

                //res.status(200).json(results);

                results.forEach(function(elem){
                    if( queryTweets.indexOf( (elem._doc.twitterId).toString() ) == -1 ){
                        missing.push(elem);
                    }
                });

                res.status(200).json(missing);


            });

        }

    }
});


module.exports = Tweets;