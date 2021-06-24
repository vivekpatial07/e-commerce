const express = require('express')
const router = express.Router()
const { getCartItems, pushCartItems, fetchUserProds } = require('../controllers/orderController')
const { checkAuth } = require('../middleware/authMiddleware')


router.post('/cart' ,getCartItems)
router.post('/cart/push', checkAuth, pushCartItems, fetchUserProds)


module.exports = router