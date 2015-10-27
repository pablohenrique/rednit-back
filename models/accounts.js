var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Accounts';

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
                                        likes: {type: [Schema.Types.Mixed], default: []}
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
                                favorites: {type: [Schema.Types.Mixed], default: []}
                            }
                        ]
                    }
                ]
            }
        }
    },
    myFriends: {type: [Schema.Types.ObjectId], default: []},
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
    friendsOfMe: {type: [Schema.Types.ObjectId], default: []}
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