const Product = require('../models/productModel')

const getAllProducts = async(req, res) => {
  const products = await Product.find()
  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
}

const getSingleProduct = async(req, res) => {
  const productId = req.params.id
  const product = await Product.findById(productId)
  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

module.exports = { getAllProducts, getSingleProduct }