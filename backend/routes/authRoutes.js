const express = require('express')
const router = express.Router()
const { signup } = require('../controllers/authControllers')

router.post('/signup',(req,res, next)=>{
  console.log('hiii')
  next()
}, signup)

module.exports = router