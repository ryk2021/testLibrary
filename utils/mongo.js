require('dotenv').config()
const mongoose = require('mongoose')
const connectionString = require('./connection')


mongoose.connect(connectionString,{
    useNewUrlParser:true,    
    useUnifiedTopology: true,    
     
})
.then(()=>{
    console.log('Exito')
})
.catch(err=>{
    console.log(err)
})