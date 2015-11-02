var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Accounts';

var accountsSchema = new mongoose.Schema({
    name: String,
    loc: { type: [Number], index: '2d' },
    email: String,
    photoUrl: String,
    accounts: {
        facebookAccount: {
            id: String,
            likes: [
                {
                    id: String,
                    page: {type: mongoose.Schema.Types.ObjectId, ref: 'Pages'},
                    instant: Date
                }
            ],
            friends : [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
        },
        twitterAccount: {
            id: Number,
            favorites: [
                {
                    instant: Date,
                    tweet: {type: mongoose.Schema.Types.ObjectId, ref: 'Tweets'}
                }
            ],
            followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}],
            following: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
        }
    },
})

module.exports = restful.model(modelName, accountsSchema);
