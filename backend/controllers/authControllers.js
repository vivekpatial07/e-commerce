const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

const signup = async(req, res) => {
  const {username, email, password} = req.body

  const userExists = await User.findOne({ email })
  
  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    username,
    email,
    password
  })

  if(user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      isSuperAdmin: user.isSuperAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid User credentials')
  }
}

const login =  async(req, res) => {
  const { email, password } = req.body

  const user  = await User.findOne({ email })
  const passwordMatched = await user.matchPassword(password)
  
  if(user && passwordMatched) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSuperAdmin: user.isSuperAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.json(401)
    throw new Error('Invalid email or password')
  }
}


module.exports = { signup, login }