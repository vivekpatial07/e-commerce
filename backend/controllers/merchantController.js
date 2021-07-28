const Product = require('../models/productModel')
const formidable = require('formidable')
const fs = require("fs")


// need to use formidable on backend and use formData(of javascript) on frontend
const addProduct = async(req, res) => {

  const form = new formidable.IncomingForm({ keepExtensions: true })
  form.parse(req, async(err, fields, file) => {
    if(err){
      return console.log(err.message)
    }
    const {title, price, category, description, stockCount, image} = fields

    const prd = await Product.create({
      title, price, category, description, stockCount, image
    })
    res.status(201).send(prd)
    //to be reviewed
    // if(file.image.size > 10000000) {
    //   return console.log('size to big')
    // }
    // const x = fs.readFileSync(file.image.path)
    // console.log(x)
  })
}

const removeProduct = async(req, res) => {
  console.log('remove prod')
}

const editProduct = async(req, res) => {
  console.log('edit prod')
}

module.exports = {
  addProduct,
  removeProduct,
  editProduct
}