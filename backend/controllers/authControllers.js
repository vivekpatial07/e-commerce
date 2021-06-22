const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')
const bcrypt = require('bcryptjs')


/*----------------------------signup controller-------------*/

const signup = async(req, res) => {
  const {username, email, password} = req.body

  try {
    const userExists = await User.findOne({ email })
    if(userExists) {
      throw new Error('User Already Exists!')
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
    throw new Error('Invalid User credentials')
  }
} catch (error) {
    console.log(error.message)
    res.status(404).send(error.message)
  }
  
}


/* -------------------login controller------------------------------ */

const login =  async(req, res) => {
  const { email, password } = req.body

  try {
    const user  = await User.findOne({ email })
  
    // need to review this const passwordMatched = await user.matchPassword(password)
    const isMatch = user && await bcrypt.compare(password, user.password);
    if(user && isMatch) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        isSuperAdmin: user.isSuperAdmin,
        token: generateToken(user._id)
      })
    } else {
      throw new Error('No User found! Please check your credentials')
    }
    
  } catch (error) {
      console.log(error.message)
      res.status(404).send(error.message)
  }
}


module.exports = { signup, login }