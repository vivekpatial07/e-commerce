const Product = require('../models/productModel')
const Order = require('../models/orderModel') 

const getCartItems = async(req, res) => {
  const productsId = req.body && req.body.map(itm => itm.id)
  const products = await Product.find({_id: productsId})
  res.status(201).json(products)
}

const pushCartItems = async(req, res) => {

  const products = await req.body
  const customerId = (req.user._id)
  //understanding the use of ref and other things
  const orderIdExists = await Order.findOne({customer_id: customerId})
  if(!orderIdExists) {
    
    const orderCreated = Order.create({
      customer_id: req.user.id,
      products: products
    })
  } else {
    orderIdExists.products = products
    orderIdExists.save()
  }
  // console.log(req.body,'----------------------------')
  // console.log(req.user,'----------------------------')
  try {
    
  } catch (error) {
    console.log(error.message )
  }
}

module.exports = {
  getCartItems,
  pushCartItems
}