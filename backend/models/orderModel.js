const mongoose = require('mongoose')

const productsInCart  = mongoose.Schema({
  product_id: {
    type: ObjectId,
    ref: 'Product',
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
})

const orderSchema = mongoose.Schema({
  customer_id: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  products: [productsInCart]

})

const Order = mongoose.model('Order', orderSchema)