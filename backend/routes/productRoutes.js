const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  getSingleProduct,
  getTopProducts,
  rateProduct,
  checkRated
} = require('../controllers/productControllers')

router.get('/', getAllProducts)
router.get('/single-product/:id', getSingleProduct)
router.get('/top-products', getTopProducts)
router.post('/rateProd', rateProduct)
router.post('/checkRated/:id', checkRated)

module.exports = router