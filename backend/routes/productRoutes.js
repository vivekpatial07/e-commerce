const express = require('express')
const router = express.Router()
const { getAllProducts, getSingleProduct } = require('../controllers/productControllers')

router.get('/', getAllProducts)
router.get('/single-product/:id', getSingleProduct)

module.exports = router