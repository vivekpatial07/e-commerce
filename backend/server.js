const express = require('express')
const dotenv = require('dotenv')
// var cors = require('cors')
const colors = require('colors')
const connectDB = require('./config/db')
// const bodyParser = require('body-parser');

dotenv.config()
connectDB()
const app = express()
// app.use(cors())
// app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json());

const PORT = process.env.PORT || 7000


app.listen(PORT,()=>{
  console.log(`running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})