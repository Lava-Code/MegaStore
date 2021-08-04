require('dotenv').config();

// Import mongoose 
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB (Cluster MongoDB on cloud) using mongoose
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connetion to MongoDB SUCCESS')
        
    } catch(error){
        console.error('Connetion to MongoDB FAILED');
        process.exit(1);
    }
}
module.exports = connectDB