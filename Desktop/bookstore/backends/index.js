const express = require('express')
const mongoose = require('mongoose')
const bookRouter = require('./routes/book.route.js')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())



app.get('/', (req, res)=>{
    res.send("Welcome to Backend")
})



app.use('/api/book', bookRouter)

app.use('/api/book', bookRouter)

app.listen(3001, (req, res)=>{
    console.log("Server is running at 3001")

})






mongoose.connect("mongodb+srv://veteranalamin:alameen1994@cluster0.tcbspcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connection Successful")

})

.catch(()=>{
    console.log("Connection Failed!")
})