// implement your API here
const express = require('express');

const db = require('./data/db.js') 

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.send('Testing')
})


server.listen(9000, () => console.log('API is running on port 9000'))