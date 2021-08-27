const mongoose = require('mongoose')
const{Schema,model} = mongoose

const rolesSheme = new Schema({
    name : String,    
    date: Date,
    
},{versionKey: false })

const Roles = model('Roles',rolesSheme )

// const roles = [{
//     name : "Student",    
//     date: new Date()
// },{
//     name : "Librarian",    
//     date: new Date()
// }]

// Roles.collection.insert(roles, function (err, docs) {
//     if (err){ 
//         return console.error(err);
//     } else {
//       console.log("Multiple documents inserted to Collection");
//     }
//   });

//   const role = new Roles({
//     name : "Student",    
//     date: new Date()
// })
// role.save()
// .then(result => {
//     console.log(result)
//     mongoose.connection.close()
// })
// .catch(err=> {
//     console.error(err)
// })


module.exports = Roles