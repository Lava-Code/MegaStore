const express = require('express')
const router = express.Router()
const { getAllProducts, getProductById, postProduct, removeProduct, updateProduct} = require('../controller/productControllers')

//@ desc Route to all product
//@ route http:localhost:5000/api/products
router.get('/', getAllProducts)

//@ desc Route to all product
//@ route http:localhost:5000/api/products/:id
router.get('/:id', getProductById)

//@ desc Save new product
router.post('/', postProduct)

// @desc remove product
router.delete('/:id', removeProduct)

// @desc Update product
router.patch('/:id', updateProduct)

module.exports = router