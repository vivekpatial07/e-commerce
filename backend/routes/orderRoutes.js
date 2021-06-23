const express = require('express')
const router = express.Router()
const { getCartItems, pushCartItems } = require('../controllers/orderController')
const { checkAuth } = require('../middleware/authMiddleware')


router.post('/cart', getCartItems)
router.post('/cart/push', checkAuth, pushCartItems)

module.exports = router