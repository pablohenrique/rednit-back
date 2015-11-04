Do you want to make this fucking awesome project works?!

Follow these motherfuckin' steps:

* Install node and mongodb
```shell
$ brew install node mongodb
```
* Clone this motherfucker
* Go inside the cloned directory
* Do this:
``` shell
npm install --save express mongoose node-restful body-parser
```
* And then do this:
``` shell
sudo npm install -g nodemon
```
* You can start this shit by doin':
``` shell
nodemon server.js
```


* Wanna test and be happy as a motherfucker? Go to your browser and type this:
```shell
http://localhost:3000/api/accounts
```


### Account Object Structure
```javascript
{
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
    friendsOfMe: {type: [Schema.Types.ObjectId], default: []}
}
```

### How to import shit on MongoDB

```sh
$ mongoimport path/to/csv/file/file_name.csv --type csv --headerline --collection crimes
```

### How to do Map Reduce on MongoDB
On api.js (for example) do:
```javascript
schema.mapReduce(function(){
    var milis = Date.parse(this.Date);
    var date  = new Date(milis);
    var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //emit the mapping between this document and the Day which it corresponds to.
    emit(daysOfWeek[date.getDay()],1);
},
 // this function will be called over the daysOfWeek array above
function(key, values){
//reduce by summing all values mapped to 1's
    return Array.sum(values);
},
{
    out: 'crime day frequencies'
}
);
```

Fucking References:

* https://github.com/matthoiland/restful-api-demo
* https://github.com/baugarten/node-restful
* http://expressjs.com/starter/generator.html
* https://github.com/radjivC/node-geolocation
* https://github.com/manuelbieh/geolib

How to do shit:
* http://blog.robertonodi.me/how-to-use-geospatial-indexing-in-mongodb-using-express-and-mongoose/# rednit-back
