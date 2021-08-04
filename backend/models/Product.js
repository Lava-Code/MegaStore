// Tell mongoose how the product table look like

// 1-import mongoose 
const mongoose = require('mongoose')

// 2-Defining the schema
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }   
});
// 3-Creating a model (converting the shema to model)
const Product = mongoose.model('Product',productSchema);

// 4-export the model
module.exports = Product;
