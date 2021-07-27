require('colors')
require('dotenv').config()
const express = require('express')
var cors = require('cors')
const connectDB = require('./config/db')
const authRouter = require('./routes/authRoutes')
const productRouter = require('./routes/productRoutes')
const orderRouter = require('./routes/orderRoutes')
const adminRouter = require('./routes/adminRoutes')
const merchantRouter = require('./routes/merchantRoutes')

connectDB()
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit:'50mb'}))
const PORT = process.env.PORT || 7000
//routing
app.use('/ecomm/users', authRouter)
app.use('/ecomm/products', productRouter)
app.use('/ecomm/order', orderRouter)
app.use('/admin', adminRouter)
app.use('/merchant', merchantRouter)

app.listen(PORT,()=>{
  console.log(`running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})