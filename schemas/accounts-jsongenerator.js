[
    {
        'repeat:100': {
            _id: '{{objectId()}}',
            name: '{{firstName()}} {{surname()}}',
            loc: [
                '{{floating(-90.000001, 90.000001)}}',
                '{{floating(-90.000001, 90.000001)}}'
            ],
            userData: {
                id: '{{integer(171231623127, 9716215432267)}}',
                email: function (tags) {
                    // Email tag is deprecated, because now you can produce an email as simple as this:
                    return ('{{firstName()}}'.toLowerCase() + '.' + '@gmail.com');
                },
                photoUrl: function(url){
                    return ('http://jafoste.net/pessoas-felizes-nao-falam-mal-dos-outros/' + '{{firstName()}}' + '.jpg');
                },
                accounts: {
                    facebookAccount: {
                        id: '{{lorem(1, "words")}}{{integer(871623127, 971621267)}}{{lorem(1, "words")}}',
                        likes: [
                            {
                                id: '{{integer(171623127, 971621267)}}',
                                account: '{{objectId()}}',
                                page: {
                                    id: '{{integer(171623127, 971621267)}}',
                                    facebookId: '{{lorem(1, "words")}}{{integer(871623127, 971621267)}}{{lorem(1, "words")}}',
                                    name: '{{lorem(1, "words")}}',
                                    about: '{{lorem(10, "words")}}',
                                    likes: []
                                },
                                instant: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}'
                            }
                        ]
                    },
                    twitterAccount: {
                        id: '{{integer(1000000000, 9999999999)}}',
                        favorites: [
                            {
                                id: '{{integer(1000000000, 9999999999)}}',
                                twitterId: '{{integer(1000000000, 9999999999)}}',
                                text: '{{lorem(15, "words")}}',
                                createdAt: '{{moment(this.date(new Date(2015, 0, 1), new Date())).format("LLLL")}}',
                                favorites: [ ]
                            }
                        ]
                    }
                }
            },
            myFriends: [],
            friendsOfMe: []
        }
    }
]