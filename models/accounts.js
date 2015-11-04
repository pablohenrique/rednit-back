var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Accounts';

var accountsSchema = new mongoose.Schema({
    name: String,
    loc: { type: [Number], index: '2d' },
    email: { type: String, index: true },
    photoUrl: String,
    accounts: {
        facebookAccount: {
            facebookId: { type: String, index: true },
            likes: [
                {
                    facebookId: { type: String, index: true },
                    page: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Pages',
                        index: true
                    },
                    instant: Date
                }
            ],
            friends : {
                type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}],
                index: true
            }
        },
        twitterAccount: {
            twitterId: { type: Number, index: true },
            favorites: {
                type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweets' }],
                index: true
            },
            following: {
                type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}],
                index: true
            }
        }
    },
})

module.exports = restful.model(modelName, accountsSchema);
