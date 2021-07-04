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

const getTopProducts = async(req, res) => {

  const products = await Product.find().limit(7)
  // console.log(products.length)
  if(products){
    res.status(201).json(products)
  } else {
    throw new Error('No Products in DB')
  }
}

const rateProduct = async(req, res) => {
  const id = req.body.id
  
  const product = await Product.findById(id)
  console.log(product)

}

module.exports = {
  getAllProducts,
  getSingleProduct,
  getTopProducts,
  rateProduct
}