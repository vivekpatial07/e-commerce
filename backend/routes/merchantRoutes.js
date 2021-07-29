const express = require('express')
const router = express.Router()
const {
  addProduct,
  removeProduct,
  editProduct,
  fetchMerchProduct
} = require('../controllers/merchantController')
// const { checkAuth } = require('../middleware/authMiddleware')

router.post('/addProduct', addProduct)
router.post('/removeProduct', removeProduct)
router.post('/editProduct', editProduct)

router.get('/fetchMerchProducts', fetchMerchProduct)

module.exports = router