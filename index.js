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

server.post('/users', (req,res) => {
    const newUser = req.body;
    if(!newUser.hasOwnProperty('name') || !newUser.hasOwnProperty('bio')){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.insert(newUser).then(id => {
            res.status(201).json(id)
        }).catch(err => {
            res.status(500).json({ error: "There was an error while saving the user to the database" })
        })
    }
    
})

server.delete('/users/:id', (req,res) => {
    const { id } = req.params;
    db.remove(id).then(deleted => {
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    }).catch(err => {
        res.status(500).json({ error: "The user could not be removed" })
    })
})


server.listen(9000, () => console.log('API is running on port 9000'))