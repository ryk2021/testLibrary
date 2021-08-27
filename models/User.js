const mongoose = require('mongoose')
const{Schema,model} = mongoose

const userSheme = new Schema({
    fname : String,
    lname:String,
    email : String,
    role: String,
    password:String,
    date: Date,
    status: {type: Number, default: 1}     
},{versionKey: false })

const User = model('Users',userSheme )


module.exports = User