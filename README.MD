# Rednit-back
This is the backend for the Android app [Rednit](https://github.com/pablohpsilva/rednit). It uses **FIWARE IoT platform** for testing, data mining and storing data.

## Using this project

Follow these steps:

* Install node and mongodb
```shell
$ brew install node mongodb
```

* Clone this repository
* Go inside the cloned directory
* Do this:
``` shell
npm install --save express mongoose node-restful body-parser
```
* And then do this:
``` shell
sudo npm install -g nodemon
```
* You can start it doing:
``` shell
nodemon server.js
```

* Go to your browser and type this:
```shell
http://localhost:3000/api/accounts
```


### Account Object Structure
```javascript
{
    name: String,
    loc: { type: [Number], index: '2d' },
    email: { type: String, index: true },
    photoUrl: String,
    accounts: {
        facebookAccount: {
            facebookId: { type: String, unique: true, required : true, dropDups: true, index: true },
            likes: {
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
}
```

### [DEPRECATED->Likes] Pages Object Structure
```javascript
{
    facebookId: { type: String, index: true },
    name: { type: String, index: true },
    about: String
}
```

### Likes Object Structure
```javascript
{
    facebookId: { type: String, unique: true, required : true, dropDups: true, index: true },
    name: { type: String, index: true }
}
```

### Tweet Object Structure
```javascript
{
    twitterId: { type: Number, index: true },
    text: String,
    createdAt: Date
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

## rednit-back API

### How to use findPeople method
```bash
[GET] http://localhost:3000/api/accounts/{user_id}/findPeople[?miles=INTEGER]
```
Keep in mind that the default "miles" is set to 4. That means the method will search people in a **5** miles radius.
The INTEGER in that string shall be in this range: [1..10]
The "miles" query is OPTIONAL!
The user_id is NOT OPTIONAL!

References:

* https://github.com/matthoiland/restful-api-demo
* https://github.com/baugarten/node-restful
* http://expressjs.com/starter/generator.html
* https://github.com/radjivC/node-geolocation
* https://github.com/manuelbieh/geolib
* http://blog.robertonodi.me/how-to-use-geospatial-indexing-in-mongodb-using-express-and-mongoose/# rednit-back
