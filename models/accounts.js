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
            facebookId: { type: String, unique: true, required : true, dropDups: true, index: true },
            likes: {
                //{
                //    facebookId: { type: String, required : true, dropDups: true, index: true },
                //    page: {
                //        type: mongoose.Schema.Types.ObjectId,
                //        ref: 'Pages',
                //        index: true
                //    },
                //    instant: Date
                //}
                type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Likes', default: []}],
                index: true
            },
            friends : {
                type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', default: []}],
                index: true
            }
        },
        twitterAccount: {
            twitterId: { type: Number, dropDups: true, index: true },
            favorites: {
                type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweets', default: [] }],
                index: true
            },
            following: {
                //type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}],
                type: [{type: Number, default: []}],
                index: true
            }
        }
    }
});

module.exports = restful.model(modelName, accountsSchema);