const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  getSingleProduct,
  getTopProducts
} = require('../controllers/productControllers')

router.get('/', getAllProducts)
router.get('/single-product/:id', getSingleProduct)
router.get('/top-products', getTopProducts)

module.exports = router