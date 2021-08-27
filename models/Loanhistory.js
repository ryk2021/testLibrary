const mongoose = require('mongoose')
const{Schema,model} = mongoose

const loanShema = new Schema({
    idBook : String,
    idUser:String,
    status : Number,    
    dateStart: Date,
    dateEnd: Date,
    
},{versionKey: false })

const Loans = model('LoanHistory',loanShema )

module.exports = Loans