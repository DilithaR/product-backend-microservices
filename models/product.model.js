const Mongoose = require('mongoose');

const productSchema = new Mongoose.Schema({
    productId: {
        type: String
    },
    productName: {
        type: String
    },
    productType: {
        type: String
    },
    productPrice: {
        type: Number
    },
    ProductDescription: {
        type: String
    }
})

module.exports = Mongoose.model('Product', productSchema);
