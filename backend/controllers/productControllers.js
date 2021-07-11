const Product = require('../models/productModel')
const User = require('../models/userModel')

const getAllProducts = async(req, res) => {
  const products = await Product.find()
  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
}

const getSingleProduct = async(req, res) => {
  const productId = req.params.id
  const product = await Product.findById(productId)
  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

const getTopProducts = async(req, res) => {

  const products = await Product.find().limit(7)
  if(products){
    res.status(201).json(products)
  } else {
    throw new Error('No Products in DB')
  }
}

const rateProduct = async(req, res) => {
  const id = req.body.ratingData.userId
  const rating = {
    productId: req.body.ratingData.id,
    stars: req.body.ratingData.stars
  }
  
  try {
    const user = await User.findById(id)
    const idx = user.ratings.findIndex(prod => prod.productId === rating.productId)
    if(idx !== -1) {
      user.ratings.filter(itm => {
        if(itm.productId === rating.productId) {
         return itm.stars = rating.stars
        }
      })

    } else{
      user.ratings.push(rating)
    }

    const product = await Product.findById(rating.productId)
    const idx2 = product.ratings.findIndex(rate => rate.raterId === id)
    if(idx2 !== -1) {
      product.ratings.filter(itm => {
        if(itm.raterId === id) {
         return itm.stars = rating.stars
        }
      })
    } else {
      product.ratings.push({
        raterId: id,
        stars: rating.stars
      })
    }

    await user.save()
    await product.save()
    res.status(201).json(user)

  } catch (error) {
    console.log(error, 'error')
  }
}

const checkRated = async(req, res) => {
  const user = await User.findById(req.body.data.userId)
  const ratings = user.ratings
  const prod = await Product.findById(req.body.data.prodId)
  const totalRatings = prod.ratings
  const rated = ratings.findIndex(prod => prod.productId === req.body.data.prodId)
  res.status(201).send({rated,  totalRatings})

}


module.exports = {
  getAllProducts,
  getSingleProduct,
  getTopProducts,
  rateProduct,
  checkRated
}