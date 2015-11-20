var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();

var Accounts = require('../models/accounts');

var jwtHeader = {
    "alg": "HS256",
    "typ": "JWT"
};
var jwtSecret = "RZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKeVpXUnVhWFJsY25NaUxDSm1iMjhpT2lKaVlYSWlMQE0pwWVhRaU9qRTBORFkzTnpNd01UUjkuUjNuNlAtQkFpQ1RPbnFiR2FRMVU1R2c2NUw2ODByazIwX0xZZkozVE9FNC8vZXlKMGVYQWlPaDUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKeVpXUnVhWFJsY25NaUxDSm1iMjhpT2lKaVlYSWlMQ0pwWVhRaU9qRNTBORFkzTnpNd01UUjkuUjNuNlAtQkFpQ1RPbnFiR2FRMVU1R2c2NUw2ODByazIwX0xZZkozVE9FNC8vZXlKMGVYQWlPaUpLVjFRaUxDSmIIhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKeVpXUnVhWFJsY25NaUxDSm1iMjhpT2lKaVlYSWlMQ0pwWVhRaU9qRTBORFkzTnpNd01TUUjkuUjNuNlAtQkFpQ1RPbnFiR2FRMVU1R2c2NUw2ODByazIwX0xZZkozVE9FNA==";

app.get('/login/:socialid', function (req, res) {
    var socialid = req.params.socialid;

    Accounts.find({
        $or: [
            {"accounts.facebookAccount.facebookId": socialid},
            {"accounts.twitterAccount.twitterId": socialid}
        ]
    }).exec(function(err, results){
        if(err || results.length == 0){
            err = {
                "error":"Bad Request",
                "message": "You've tried requested a fucking token. Don't try that again. Not like that -.-'  "
            }
        }
        res.status((err)?400:200).json( err || jwt.sign({
                iss: 'r-b', //rednit-back
                aud:'rs', //redniters
                sub: 'r-l-t', //rednit-login-token
                sid: socialid, //socialID: '1617709871794031',
                prv: 'user' //privilege: 'user'
            }, jwtSecret) );
    });

});

//app.get('/login/:token', function (req, res) {
//    var token = req.params.token;
//    jwt.verify(token, jwtSecret, {algorithms:["HS256", "HS384"], issuer: 'r-b', audience:'rs'}, function(err, decoded){
//        if(err){
//            res.status(500).json(err);
//        } else {
//            res.status(200).json(decoded);
//        }
//    });
//});

module.exports = app;