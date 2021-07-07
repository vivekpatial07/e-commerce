const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const ratingSchema = mongoose.Schema({
  productId: {
    type: String,
    ref: 'User',
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
})

const addressSchema = mongoose.Schema({
  mainAddress: {type: String},
  landmark: {type: String},
  city: {type: String},
  state: {type: String},
  pincode: {type: String},
  addressId: {
    type: String,
    ref: 'User',
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

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    isSuperAdmin: {
      type: Boolean, 
      required: true,
      default: false
    },
    ratings:[ratingSchema],
    reviews: [reviewSchema],
    address:[addressSchema]
  },
  {
    timestamps: true
  }
)

// need to review this later on
// userSchema.methods.matchpassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

module.exports = User 