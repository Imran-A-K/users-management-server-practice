const express = require('express')
const cors = require('cors')
// import express from 'express';
// import cors from 'cors';
const app = express()
const port = process.env.PORT || 5000;
// middle ware
app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'Irfan', email: 'irfan@gmail.com'},
    { id: 2, name: 'Adnan', email: 'adnan@gmail.com'},
    { id: 3, name: 'Imran', email: 'imran@gmail.com'},
]

app.get('/', (req,res) => {
    res.send('Users Management Server is Running')
})

app.get('/users', (req,res) => {
    res.send(users);
})
app.post('/users', (req,res) => {
    console.log('Post API hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1
    users.push(newUser); 
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})