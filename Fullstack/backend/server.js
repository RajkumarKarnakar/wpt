//importing dependencies
const express=require("express")
const bodyParser=require('body-parser')
const cors =require('cors')
const mongoose=require('mongoose')

//initializing express app
const app=express()

//configure middlewear
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// define routes
app.get('/',(req,resp)=>{resp.send('Hello World')})

//Start the server 
// app.listen(9090,()=>{
//     console.log('server started on port 9090')
// })
mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(9090,()=>{
        console.log('server started on port 9090')
    })
}).catch(err=>console.log(err))