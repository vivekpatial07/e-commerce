const formidable = require('formidable')
const fs = require("fs")

const addProduct = async(req, res) => {
  console.log(req.body)
  const form = new formidable.IncomingForm({ keepExtensions: true })
  form.parse(req, (err, fields, file) => {
    if(err){
      return console.log(err.message)
    }
    //to be reviewed
    if(file.image.size > 10000000) {
      return console.log('size to big')
    }
    const x = fs.readFileSync(file.image.path)
    console.log(x)
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