// ** Dependencies **
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');

// ** Constants **
var PORT = 3000;

// ** MongoDB **
// Don't worry, fucker. If the Database DOES NOT exist,
// mongoose will take care of that. Fucking awesome, right?
mongoose.connect('mongodb://localhost/rednitbackend');

// ** Express **
// This object is responsible to run express.
// This is THE shit.
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// Routes

//var jwtHeader = {
//    "alg": "HS256",
//    "typ": "JWT"
//};
//var jwtSecret = "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKeVpXUnVhWFJsY25NaUxDSm1iMjhpT2lKaVlYSWlMQ0pwWVhRaU9qRTBORFkzTnpNd01UUjkuUjNuNlAtQkFpQ1RPbnFiR2FRMVU1R2c2NUw2ODByazIwX0xZZkozVE9FNC8vZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKeVpXUnVhWFJsY25NaUxDSm1iMjhpT2lKaVlYSWlMQ0pwWVhRaU9qRTBORFkzTnpNd01UUjkuUjNuNlAtQkFpQ1RPbnFiR2FRMVU1R2c2NUw2ODByazIwX0xZZkozVE9FNC8vZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lKeVpXUnVhWFJsY25NaUxDSm1iMjhpT2lKaVlYSWlMQ0pwWVhRaU9qRTBORFkzTnpNd01UUjkuUjNuNlAtQkFpQ1RPbnFiR2FRMVU1R2c2NUw2ODByazIwX0xZZkozVE9FNA==";
//
//app.post('/api/login', function (req, res) {
//    var token = jwt.sign({
//        iss: 'r-b', //rednit-back
//        aud:'rs', //redniters
//        sub: 'r-l-t', //rednit-login-token
//        sid: '1617709871794031', //socialID: '1617709871794031',
//        prv: 'user' //privilege: 'user'
//    }, jwtSecret);
//    res.status(200).json(token);
//
//});
//app.get('/api/login/:token', function (req, res) {
//    var token = req.params.token;
//    jwt.verify(token, jwtSecret, {algorithms:["HS256", "HS384"], issuer: 'r-b', audience:'rs'}, function(err, decoded){
//        if(err){
//            res.status(500).json(err);
//        } else {
//            res.status(200).json(decoded);
//        }
//    });
//});
app.use('/api',require('./routes/jsonwebtoken'));
app.use('/api', require('./routes/api'));

// Start server
app.listen(PORT, '0.0.0.0'); //Listen for connections. It will be reachable from any local IP address
console.log('API is running on port ' + PORT);
