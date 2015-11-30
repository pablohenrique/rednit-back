var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Likes';

var likesSchema = new mongoose.Schema ({
    facebookId: { type: String, unique: true, required : true, dropDups: true, index: true },
    name: { type: String, index: true }
});

module.exports = restful.model(modelName, likesSchema);
