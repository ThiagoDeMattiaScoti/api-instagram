require('dotenv').config()
require('./database/index')
const express = require('express')
const routes = require('./routes.js')

const app = express()
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server on in port ${PORT}`)
})