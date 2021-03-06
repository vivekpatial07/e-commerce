const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const checkAuth = async(req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_KEY)
      if(decoded){
        req.user = await User.findById(decoded.id).select('-password')
        next()     
      } else {
        throw new Error('Not authorized, no token!!!!!!!')
      }
    } catch (error) {
      console.log(error)
      res.status(401).send(error.message)
    }
  }

  // if (!token) {
  //   res.status(401)
  //   throw new Error('Not authorized, no token')
  // }
}

const checkAdmin = (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

const checkSuperAdmin = (req, res, next) => {
  if(req.user && req.user.isSuperAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

module.exports = { checkAuth, checkAdmin, checkSuperAdmin }