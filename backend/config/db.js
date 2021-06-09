const mongoose = require('mongoose');

const connectDB = () => {
  const uri = process.env.DB_URI

  mongoose.set('useFindAndModify', false);
  
  mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true})
  
  const connection = mongoose.connection;
  connection.once('open', (err)=>{
    console.log(`MongoDB connected successfully`.cyan.underline)
  })
  
}

module.exports = connectDB