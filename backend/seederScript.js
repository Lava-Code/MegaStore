require('dotenv').config();

const productData = require('./data/products')
const product = require('./models/Product')
const connectDB = require('./config/db')

connectDB();
const importData = async () => {
    try {
        await product.deleteMany({});
        await product.insertMany(productData)
        console.log('Data imported to MongoDB SUCCESS')
        process.exit()
    } catch (error) {
        console.error(`error while import data ${error}`)
        process.exit(1)
    }
}
importData();