// Include express in the app (let express run the server and routes)
const express = require('express')

// Startup an instance of app (using express to connect any package after include it)
const app = express()

// include dotenv so we cann access process.env and run .config functionls

require('dotenv').config()

// Setupt listening port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is runing on port ${PORT}`))

// require the connection to MongoDB (Cluster MongoDB on cloud) and excute the connection to DataBase 
// import connectDB
const connectDB = require('./config/db');
connectDB();

// Create routes to products
const productRoutes = require('./routes/productRoutes');
/* express.json() This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
   Setup the server to accept JSON
*/
app.use(express.json());
// redirect the product pull request to productRoutes
// http:localhost:5000/api/products => redirect to productRoutes
app.use('/api/products',productRoutes)
