require('./utils/mongo')
const express = require('express')
const app = express()
var cors = require('cors')
const Book = require('./models/Book')
const Role = require('./models/Role')
const User = require('./models/User')
const Loans = require('./models/Loanhistory')


app.use(cors())
app.use(express.json())

app.get('/api',(req,res)=>{
    res.send('Welcome to API')    
})


/****************************************/
                //Login
/****************************************/
app.post('/api/login',(req,res)=> {    
    const parameter = req.body
    console.log(parameter)
    User.find({email:parameter.email,password:parameter.password})
    .select({
        'password':0,
        'date':0,
        'status':0
    })
    .then(user => {
        console.log(user.length)        
        console.log(user.toString())            
        if(user.length>0){
            
            res.json(user)        
        }        
        else{
            res.json({})        
        }        
    })
})

/****************************************/
                //Boook
/****************************************/
app.get('/api/books',(req,res)=> {    
    Book.find({}).then(book => {
        res.json(book)        
    })
})

app.get('/api/books/:id',(req,res)=> {    
    const { id } = req.params
    Book.findById(id).then(book => {
        res.json(book)        
    })
})

app.post('/api/books',(req,res)=> {    

    console.log(req.body)

    const book = new Book({
    title : req.body.title,
    author :  req.body.author,
    genre:  req.body.genre,
    year:  req.body.year,
    amount: req.body.amount,
    date: new Date()   
    })
    
    book.save()
    .then(result => {
        console.log(result)
        res.json(result)  

    })
    .catch(err=> {
            next(err)
    })

})

app.put('/api/books/:id',(req,res)=> {    

    const { id } = req.params
    console.log(req.body)

    const book = {
    title : req.body.title,
    author :  req.body.author,
    genre:  req.body.genre,
    year:  req.body.year,
    amount: req.body.amount,
    date: new Date()   
    }
    
    Book.findByIdAndUpdate(id,book,{new:true})
    .then(response =>{
        res.json(response)
    })
    .catch(err=>{
        next(err)
    })



    book.save()
    .then(result => {
        console.log(result)
        res.json(result)  

    })
    .catch(err=> {
            next(err)
    })

})

/****************************************/
                //Users
/****************************************/

app.get('/api/user',(req,res)=>{    
    User.find({}).then(users => {
        res.json(users)        
    })
})

app.get('/api/user/:id',(req,res)=>{    
    const { id } = req.params

    User.findById(id).then(users => {
        res.json(users)        
    })
})

app.post('/api/user',(req,res)=>{    
    const user = new User({
        fname : req.body.fname,
        lname:req.body.lname,
        email : req.body.email,
        role: req.body.role,
        password:req.body.password,
        date: new Date(),
})
    user.save()
    .then(result => {
        console.log(result)
        res.json(result)    
    })
    .catch(err=> {
        console.error(err)
    })
})

app.put('/api/user/:id',(req,res)=>{   
    const { id } = req.params
    
    const newUser = {
        fname : req.body.fname,
        lname:req.body.lname,
        email : req.body.email,
        role: req.body.role,
        password:req.body.password,
        status: req.body.status,
        date: new Date(),
}

    User.findByIdAndUpdate(id,newUser,{new:true})
     .then(response =>{        
        res.json(response)
     })
     .catch(err=>{
         //response.status(204).end()
         console.error(err)
    })    
})


/****************************************/
                //Loans
/****************************************/
app.get('/api/loans',(req,res)=>{    
    User.find({}).then(loan => {
        res.json(loan)        
    })
})

app.get('/api/loans/:id',(req,res)=>{    
    const { id } = req.params

    User.find({idUser:id}).then(loans => {
        res.json(loans)        
    })
})

app.post('/api/loans',(req,res)=>{ 
    const parameters = req.body

    const loan = new Loans({
        idBook : parameters.idBook,
        idUser:  parameters.idUser,
        status : parameters.status,            
        dateStart: new Date(),
})
loan.save()
    .then(result => {
        console.log(result)
        res.json(result)    
    })
    .catch(err=> {
        console.error(err)
    })
})

app.put('/api/loans/:id',(req,res)=>{   
    const { id } = req.params
    
    const parameters = req.body

    const newloan ={
        idBook : parameters.idBook,
        idUser:  parameters.idUser,
        status : parameters.status,            
        dateEnd: new Date(),
}

    Loans.findByIdAndUpdate(id,newloan,{new:true})
     .then(response =>{        
        res.json(response)
     })
     .catch(err=>{
         //response.status(204).end()
         console.error(err)
    })    
})

/****************************************/
                //Roles
/****************************************/

app.get('/api/roles',(req,res)=>{    
    Role.find({}).then(book => {
        res.json(book)        
    })
})



//midd
app.use((error,req,resp,next)=>{
    
    response.status(400).send({error:"404"})
})
app.use((error,req,resp,next)=>{
    console.error(error.name)
    if(error.name==='CastError')    
        response.status(400).send({error:"400"})
    else
        response.status(500).send({error:"500"})
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Server Running on port ${PORT}`))



