const mongoose = require('mongoose')
const{Schema,model} = mongoose

const bookSheme = new Schema({
    title : String,
    genre:String,
    author : String,
    year: Number,
    amount:Number,
    date: Date,
    
},{versionKey: false })

const Book = model('Book',bookSheme )

// const book = new Book({
//     title : "String",
//     author : "Miguel de Cervantes",
//     genre:"Sátira, Parodia, Farsa, Novela psicológica",
//     year: 1605,
//     amount:25,
//     date: new Date()
// })


// book.save()
// .then(result => {
//     console.log(result)
//     mongoose.connection.close()
// })
// .catch(err=> {
//     console.error(err)
// })


module.exports = Book