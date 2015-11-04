var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Tweets';

var tweetsSchema = new mongoose.Schema ({
    twitterId: { type: Number, index: true },
    text: String,
    createdAt: Date,
});

module.exports = restful.model(modelName, tweetsSchema);
