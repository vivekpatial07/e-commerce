const User = require('../models/userModel')

const fetchAllUsers = async(req, res) => {
  const users = await User.find({isAdmin: false})
  console.log(users)
  res.json(users)
}

module.exports = { fetchAllUsers }