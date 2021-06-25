const mongoose = require('mongoose')

const productsInCart  = mongoose.Schema({
  product_id: {
    type: String,
    ref: 'Product',
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  // totalPrice: {
  //   type: Number,
  //   required: true
  // }
})

const orderSchema = mongoose.Schema({
  customer_id: {
    type: String,
    ref: 'User',
    required: true
  },
  products: [productsInCart],
  mainAddress: {type: String},
  landmark: {type: String},
  city: {type: String},
  state: {type: String},
  pincode: {type: String}

})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order