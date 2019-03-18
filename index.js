// implement your API here
const express = require('express');

const db = require('./data/db.js') 

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.send('Testing')
})

server.get('/users', (req,res) => {
    db.find().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    })
})

server.get('/users/:id', (req,res) => {
    const { id } = req.params
    db.findById(id).then(user => {
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ error: "The users information could not be retrieved." })
        }
    }).catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
})


server.listen(9000, () => console.log('API is running on port 9000'))