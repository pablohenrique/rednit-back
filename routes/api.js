// Dependencies
var express = require('express');
var async = require('async');
var router = express.Router();

// Models
var Pages = require('../models/pages');
var Tweets = require('../models/tweets');
var Accounts = require('../models/accounts');

// Routes
Accounts.methods(['get', 'post', 'put', 'delete']);
Accounts.route('findPeople.get', {
    detail: true, // if detail is true, we'll need an object ID. EX: /accounts/5630eb705a97cb1406efa47a/findPeople [GET]
    handler: function(req, res, next){
        //res.json({ 'response': 200 });
        Accounts.findById(req.params.id, function(err, obj){
            if(err){
                res.status(500).json(err);
            } else {
                Accounts.find({
                    loc : {
                        $geoWithin : {
                            $center : [ obj._doc.loc, 40 * 0.000981747704245008 ] /* 40 = 5 miles radius*/
                        }
                    }
                }).exec(function(err,locations){
                    res.status(200).json(false, (err) ? {} : locations );
                });
            }
        });
    }
});
Accounts.register(router, '/accounts');

Pages.methods(['get', 'put', 'post', 'delete']);
Pages.register(router, '/pages');

Tweets.methods(['get', 'put', 'post', 'delete']);
Tweets.register(router, '/tweets');

// Return router
module.exports = router;
