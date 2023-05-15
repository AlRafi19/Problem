const express = require("express")
const helmet = require ("helmet")
const app = express()
require('dotenv').config()

const port = process.env.PORT||3000
console.log(port)

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())

app.listen(port, ()=>{
    console.log("Server Runs Successfully")
})