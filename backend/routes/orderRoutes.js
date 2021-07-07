const express = require('express')
const router = express.Router()
const {
  getCartItems,
  pushCartItems,
  fetchUserProds,
  addAddress,
  fetchAddress,
  doPayment,
  checkAddress
} = require('../controllers/orderController')
const { checkAuth } = require('../middleware/authMiddleware')


router.post('/cart' ,getCartItems)
router.post('/cart/push', checkAuth, pushCartItems, fetchUserProds)
router.post('/addAddress', checkAuth, addAddress)
router.get('/fetchAddress',checkAuth, fetchAddress)
router.post('/pay', doPayment)
router.post('/checkAddress', checkAddress)

module.exports = router