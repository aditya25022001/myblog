import express from 'express'
import cors from 'cors'
import path from 'path'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

// connectDB()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/',(req,res) => res.send("Hello"))

app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`))