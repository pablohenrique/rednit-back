var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Accounts';

var accountsSchema = new mongoose.Schema({
    name: String,
    loc: {
        type: [Number],
        index: '2d'
    },
    email: {
        type: String,
        index: true
    },
    photoUrl: String,
    accounts: {
        facebookAccount: {
            facebookId: {
                type: String,
                unique: true,
                required : true,
                dropDups: true,
                index: true
            },
            likes: {
                type: [mongoose.Schema.Types.Mixed],
                ref: 'Likes',
                index: true
            },
            friends : {
                type: [mongoose.Schema.Types.Mixed],
                ref: 'Accounts',
                default: [],
                index: true
            }
        },
        twitterAccount: {
            twitterId: {
                type: Number,
                dropDups: true,
                index: true
            },
            favorites: {
                type: [mongoose.Schema.Types.Mixed],
                ref: 'Tweets',
                default: [],
                index: true
            },
            following: {
                //type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}],
                type: [Number],
                default: [],
                index: true
            }
        }
    }
});

module.exports = restful.model(modelName, accountsSchema);