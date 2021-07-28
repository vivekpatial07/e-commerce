const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
  raterId: {
    type: String,
    ref: 'User',
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
})


const reviewSchema = mongoose.Schema({
  reviewerId: {
    type: String,
    ref: 'User',
    required: true
  },
  review: {
    type: String,
    required: true
  }
})
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
    data: Buffer,
    type: String,
  },
  stockCount: {
    type: Number,
    required: true
  },
  ratings: [ratingSchema],
  reviews: [reviewSchema],
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product