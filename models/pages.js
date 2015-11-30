var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Pages';

var pagesSchema = new mongoose.Schema ({
    facebookId: { type: String, index: true, unique: true, required : true, dropDups: true },
    name: { type: String, index: true }
});

module.exports = restful.model(modelName, pagesSchema);
