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


module.exports = { getAllProducts }