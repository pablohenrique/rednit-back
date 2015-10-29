var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Accounts';

var pages = new mongoose.Schema ({
    id: String,
    name: String,
    about: String,
    peopleWhoLike: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
});

var tweets = new mongoose.Schema ({
    id: Number,
    text: String,
    createdAt: Date,
    favoritedBy : [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
});

var accountsSchemaNew = new mongoose.Schema({
    name: String,
    loc: { type: [Number], index: '2d' },
    email: String,
    photoUrl: String,
    accounts: {
        facebookAccount: {
            id: String
            likes: [
                {
                    id: String,
                    page: {type: mongoose.Schema.Types.ObjectId, ref: 'Pages'}
                    instant: Date
                }
            ],
            friends : [ObjectId]
        },
        twitterAccount: {
            id: Number,
            favorites: [
                {
                    instant: Date,
                    tweet: {type: mongoose.Schema.Types.ObjectId, ref: 'Tweets'}
                }
            ]
            followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
            following: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accounts'}]
        }
    },
})

var accountsSchema = new mongoose.Schema({
    name: String,
    loc: { type: [Number], index: '2d' },
    userData: {
        id: Number,
        email: String,
        photoUrl: String,
        accounts: {
            facebookAccount: {
                id: String,
                likes: [
                    {
                        id: Number,
                        account: [mongoose.Schema.Types.Mixed],
                        page: {
                            id: Number,
                            facebookId: String,
                            name: String,
                            about: String,
                            likes: [
                                {
                                    id: Number,
                                    account: [mongoose.Schema.Types.Mixed],
                                    page: {
                                        id: Number,
                                        facebookId: String,
                                        name: String,
                                        about: String,
                                        likes: {type: [mongoose.Schema.Types.Mixed], default: []}
                                    },
                                    instant: Date
                                }
                            ]
                        },
                        instant: Date
                    }
                ]
            },
            twitterAccount: {
                id: Number,
                favorites: [
                    {
                        id: Number,
                        twitterId: Number,
                        text: String,
                        createdAt: Date,
                        favorites: [
                            {
                                id: Number,
                                twitterId: Number,
                                text: String,
                                createdAt: Date,
                                favorites: {type: [mongoose.Schema.Types.Mixed], default: []}
                            }
                        ]
                    }
                ]
            }
        }
    },
    myFriends: {type: [mongoose.Schema.Types.ObjectId], default: []},
    //    [
    //    {
    //        name: String,
    //        userData: {
    //            id: Number,
    //            email: String,
    //            photoUrl: String,
    //            accounts: {
    //                facebookAccount: {
    //                    id: String,
    //                    likes: [
    //                        {
    //                            id: Number,
    //                            account: Object,
    //                            page: {
    //                                id: Number,
    //                                facebookId: String,
    //                                name: String,
    //                                about: String,
    //                                likes: [mongoose.Schema.Types.Mixed]
    //                            },
    //                            instant: Date
    //                        }
    //                    ]
    //                },
    //                twitterAccount: {
    //                    id: Number,
    //                    favorites: [
    //                        {
    //                            id: Number,
    //                            twitterId: Number,
    //                            text: String,
    //                            createdAt: Date,
    //                            favorites: [mongoose.Schema.Types.Mixed]
    //                        }
    //                    ]
    //                }
    //            }
    //        },
    //        myFriends: [mongoose.Schema.Types.Mixed],
    //        friendsOfMe:[mongoose.Schema.Types.Mixed],
    //        loc: { type: [Number], index: '2d' }
    //    }
    //],
    friendsOfMe: {type: [mongoose.Schema.Types.ObjectId], default: []}
    //    [
    //    {
    //        name: String,
    //        userData: {
    //            id: Number,
    //            email: String,
    //            photoUrl: String,
    //            accounts: {
    //                facebookAccount: {
    //                    id: String,
    //                    likes: [
    //                        {
    //                            id: Number,
    //                            account: Object,
    //                            page: {
    //                                id: Number,
    //                                facebookId: String,
    //                                name: String,
    //                                about: String,
    //                                likes: [mongoose.Schema.Types.Mixed]
    //                            },
    //                            instant: Date
    //                        }
    //                    ]
    //                },
    //                twitterAccount: {
    //                    id: Number,
    //                    favorites: [
    //                        {
    //                            id: Number,
    //                            twitterId: Number,
    //                            text: String,
    //                            createdAt: Date,
    //                            favorites: [mongoose.Schema.Types.Mixed]
    //                        }
    //                    ]
    //                }
    //            }
    //        },
    //        myFriends: [mongoose.Schema.Types.Mixed],
    //        friendsOfMe:[mongoose.Schema.Types.Mixed],
    //        loc: { type: [Number], index: '2d' }
    //    }
    //]
});

module.exports = restful.model(modelName, accountsSchema);
