const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
        console.error(error)
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
        res.send(req.params.id)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
        console.error(error)
    }
}

const postProduct = async (req, res) => {
    dataToPost = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        countInStock: req.body.countInStock,
        imageUrl: req.body.imageUrl, 
    })
    try {
        const postedProduct = await dataToPost.save()
        // status 201: Object created Success
        res.status(201).json(postedProduct)
    } catch (error) {
        // Status 400: user send bad data
        res.status(400).json({message: error.message})
    }
}

const removeProduct = async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        await Product.findByIdAndUpdate()
        res.status(201).json({message: 'DELETED PRODUCT SUCCESED'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req,res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id,{name: req.body.name })
        res.status(201).json({message: 'PRODUCT UPDATED SUCCESED'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    removeProduct,
    updateProduct
}