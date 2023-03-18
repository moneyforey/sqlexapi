const express = require('express')
const userRouter = require('./src/users/users.routes')
const cors = require('cors');

const server = express()
server.use(cors());
server.use(express.urlencoded({ extended: true }))

server.use(express.json())

server.get('/',(req,res)=>res.send('<h1>welcome</h1>'))

server.use('/users',userRouter);

server.listen(8080, () =>{  console.log('http://localhost:8080')})