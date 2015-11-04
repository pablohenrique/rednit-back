var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Pages';

var pagesSchema = new mongoose.Schema ({
    facebookId: { type: String, index: true },
    name: { type: String, index: true },
    about: String
});

module.exports = restful.model(modelName, pagesSchema);
