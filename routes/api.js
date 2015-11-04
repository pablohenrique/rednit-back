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
        var accountId = req.params.id;
        Accounts.findById(accountId, function(err, obj){
            if(err){
                res.status(500).json(err);
            } else {
                var location = obj._doc.loc;
                var miles = (req.query.miles || 4) * 10;
                var facebookIdArrayFromAccountObject = [];
                var twitterIdArrayFromAccountObject = [];

                obj._doc.accounts.facebookAccount.likes.forEach(function(element){
                    facebookIdArrayFromAccountObject.push(element.facebookId);
                });

                obj._doc.accounts.twitterAccount.favorites.forEach(function(element){
                    twitterIdArrayFromAccountObject.push(element.twitterId);
                });
                Accounts.find({
                    loc:{
                        $geoWithin:{
                            $center:[location, miles * 0.000981747704245008]
                        }
                    },
                    _id:{
                        $ne: accountId
                    },
                    //$and: [
                    //    {
                    //        "accounts.facebookAccount.likes.facebookId": {
                    //                $in: facebookIdArrayFromAccountObject
                    //            }
                    //    },
                    //    {
                    //        "accounts.facebookAccount.likes.facebookId": {
                    //            $in: twitterIdArrayFromAccountObject
                    //        }
                    //    }
                    //]
                    "accounts.facebookAccount.likes.facebookId": {
                        $in: facebookIdArrayFromAccountObject
                    }
                }).exec(function(err, results){
                    res.status(200).json(false, (err) ? {} : results );
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
