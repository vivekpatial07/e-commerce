const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  getSingleProduct,
  getTopProducts,
  rateProduct
} = require('../controllers/productControllers')

router.get('/', getAllProducts)
router.get('/single-product/:id', getSingleProduct)
router.get('/top-products', getTopProducts)
router.post('/rateProd', rateProduct)

module.exports = router