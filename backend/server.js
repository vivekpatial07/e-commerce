const express = require('express')
const dotenv = require('dotenv')
var cors = require('cors')
const colors = require('colors')
const connectDB = require('./config/db')
const authRouter = require('./routes/authRoutes')
const productRouter = require('./routes/productRoutes')
const orderRouter = require('./routes/orderRoutes')
const adminRouter = require('./routes/adminRoutes')

dotenv.config()
connectDB()
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const PORT = process.env.PORT || 7000

//routing
app.use('/ecomm/users', authRouter)
app.use('/ecomm/products', productRouter)
app.use('/ecomm/order', orderRouter)
app.use('/admin', adminRouter)

app.listen(PORT,()=>{
  console.log(`
  running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})