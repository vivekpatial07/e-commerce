const express = require('express')
const router = express.Router()
const { fetchAllUsers } = require('../controllers/adminControllers')

router.get('/fetchAllUsers', fetchAllUsers)

module.exports = router