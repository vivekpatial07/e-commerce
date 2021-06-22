const express = require('express')
const router = express.Router()
const { getCartItems } = require('../controllers/orderController')

router.post('/cart', getCartItems)

module.exports = router