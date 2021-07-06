const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
  
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  stockCount: {
    type: Number,
    required: true
  },
  totalRatings: {
    type: Number,
    required: true,
    default: 0
  },
  totalReviews: {
    type: Number,
    required: true,
    default: 0
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product