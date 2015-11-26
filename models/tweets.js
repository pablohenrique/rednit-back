var restful = require('node-restful');
//var uniqueValidator = require('mongoose-unique-validator');
var mongoose = restful.mongoose;
var modelName = 'Tweets';

var tweetsSchema = new mongoose.Schema ({
    twitterId: { type: Number, unique: true, required : true, dropDups: true, index: true },
    text: String,
    createdAt: Date
});
//tweetsSchema.plugin(uniqueValidator);

module.exports = restful.model(modelName, tweetsSchema);