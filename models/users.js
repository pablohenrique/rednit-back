// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
var modelName = 'Users';

// Schema
var usersSchema = new mongoose.Schema({
    name: String,
    //currentAddress: {
    //    line1: String,
    //    line2: String,
    //    city: String,
    //    state: String,
    //    country: String,
    //    zipCode: String
    //},
    address: { type: String, trim: true },
    loc: { type: [Number], index: '2d' },
    socialId: String,
    socialNetwork: String,
    socialName: String,
    email: String,
    purchases: [
        {
            originId: String,
            date: Date,
            time: String,
            shippingDate: Date,
            shippingTime: String,
            paymentMethod: String,
            itemsBought: [
                {
                    itemType: {type: String, default: 'beer'},
                    name: { type: String, trim: true },
                    grade: { type: String, trim: true },
                    origin: { type: String, trim: true },
                    description: { type: String, trim: true },
                    type: { type: String, trim: true },
                    color: { type: String, trim: true },
                    alcohoolPercentage: { type: Number },
                    //unitPrice: { type: Number },
                    packQuantity: { type: Number },
                    packPrice: { type: Number },
                    weightMl: { type: Number },
                    quantity: Number
                }
            ],
            totalPrice: Number
        }
    ]
});

usersSchema.methods.getPurchaseArray = function() {
    //return this.model(modelName).find({ type: this.type }, cb);
    return this.purchases;
};

usersSchema.methods.sumTotalPurchases = function(id) {
    var query = mongoose.model(modelName, usersSchema).findOne({ 'name': 'Fulano' });

    return query.exec(function (err, obj) {
        if(err){
            return 0;
        } else {
            var total = 0;
            obj.purchases.forEach(function(elem){
                total += elem.totalPrice;
            });
            return total;
        }
    });
};

// Return model
module.exports = restful.model(modelName, usersSchema);