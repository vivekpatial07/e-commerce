const Product = require('../models/productModel')

const getCartItems = async(req, res) => {
  const productsId = req.body && req.body.map(itm => itm.id)
  const products = await Product.find({_id: productsId})
  res.status(201).json(products)
}

module.exports = {getCartItems}