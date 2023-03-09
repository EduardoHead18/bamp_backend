import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { conexion } from './database/conexion.js'
import { router } from './routes/routes.js'
import {keys} from './settings/keys.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
//connection to db
conexion()
//middleware
app.use(cors())
app.use(express.json())
app.use('/api/', router)
app.use(router)
app.set('key',keys.key)
app.use(express.urlencoded({extended:false}))
//config
app.listen(port, ()=>{
    console.log(`server start on port: ${port}`)
})