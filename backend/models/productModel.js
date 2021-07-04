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
  ratings: [ratingSchema],
  reviews: [reviewSchema]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product