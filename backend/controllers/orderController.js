const Product = require('../models/productModel')
const Order = require('../models/orderModel') 
const User = require('../models/userModel')
const stripe = require('stripe')('sk_test_51J6amuSAv8vnTMkrCWJscYFSto4VrkoCkogG2LgDcehozkmcTE03u0gfTd10syGZGDViptlxLVMjltqMQoEIipJ700WsPmowwy')


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
      customer_id: req.user._id,
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

const addAddress = async(req, res) => {

  const address = {}

  const order = await Order.findOne({customer_id: req.user._id})
  const user = await User.findById(req.user._id)

  
  address.mainAddress = req.body.mainAddress
  address.city = req.body.city
  address.state = req.body.state
  address.pincode = req.body.pincode
  address.landmark = req.body.landmark
  address.addressId = req.user._id.toString()

  user.address.push(address)
  order.address = address

  await order.save()
  await user.save()
  res.json(201)

}

const fetchAddress = async(req, res) => {
  const address = {}
  const order = await Order.findOne({ customer_id: req.user._id })
  
  address.mainAddress = order.mainAddress
  address.city = order.city
  address.landmark = order.landmark
  address.pincode = order.pincode
  address.state = order.state
  // will use populate in future 
  // .populate({customer_id: req.user._id}, 'city')

  res.status(201).json(address)

}

const doPayment = async(req, res) => {
  
  const cartItems = req.body.items
  
  const totalPrice = cartItems.reduce((acc, itm) => {
    return acc+((itm.price)*itm.qty)
  },0)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice.toString()*100,
    currency: "inr"
  })

  res.json({
    clientSecret: paymentIntent.client_secret
  })
}

const checkAddress = async(req, res) => {
  const id = req.body.userId
  const user = await User.findById(id)
  console.log(user.address)
  if(user.address.length > 0) {
    res.status(201).json(user.address)
  } else {
    res.status(201).send({address: false})
  }
}

module.exports = {
  getCartItems,
  pushCartItems,
  fetchUserProds,
  addAddress,
  fetchAddress,
  doPayment,
  checkAddress
}