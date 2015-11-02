var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Pages';

var pagesSchema = new mongoose.Schema ({
    id: String,
    name: String,
    about: String
    // Bidirectional relationship sucks, because we will loose the atomicity
    //peopleWhoLike: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
});

pagesSchema.methods.peopleWhoLike = function (done) {
    var Accounts = this.model('Accounts');
    return Accounts.find({'accounts.facebookAccount.likes.page': this}, done);
}


module.exports = restful.model(modelName, pagesSchema);
