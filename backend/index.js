const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config()

//setting up the body parser
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))

app.use(cors())

const PORT = process.env.PORT || 8080 

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true })
.then(()=> app.listen(PORT, ()=>{
  console.log(`Server is up and running in port ${PORT}`)
}))
.catch((error)=>console.log(error))

mongoose.set(`strictQuery`, false)