const Product = require('../models/productModel')
const Order = require('../models/orderModel') 

const getCartItems = async(req, res) => {
  try {
   
    if(req.body){
      const productsId = req.body.map(itm => itm.product_id)
      const products = await Product.find({_id: productsId})
      res.status(201).json(products)
    } else {
      res.status(201).json('no product found')
    }
    
  } catch (error) {
    res.status(401).send(error.message)
  }
}

const pushCartItems = async(req, res, next) => {

  const products = await req.body
  const customerId = (req.user._id)
  //understanding the use of ref and other things
  try {
    
  } catch (error) {
    
  }
  const orderIdExists = await Order.findOne({customer_id: customerId})
  if(!orderIdExists) {
    
    const orderCreated = Order.create({
      customer_id: req.user.id,
      products: products
    })
    req.user_products = orderCreated
    res.send(orderCreated)
    next()
  } else {
    orderIdExists.products = products
    orderIdExists.save()
    req.user_products = orderIdExists
    next()
  }
 
}


const fetchUserProds = async(req, res) => {
  const prodIds = req.user_products.products.map(itm=>itm.product_id)
  const userprod = await Product.find({_id: prodIds})
  res.status(201).json(userprod)

}



module.exports = {
  getCartItems,
  pushCartItems,
  fetchUserProds
}