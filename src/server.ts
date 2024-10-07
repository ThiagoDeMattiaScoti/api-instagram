require('dotenv').config()
import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)

const PORT: any = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server on in port ${PORT}`)
})