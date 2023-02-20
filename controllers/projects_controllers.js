const express = require('express')
const books = express.Router()

//INDEX
books.get('/', (req, res) => {
    res.send('My Index Book Page at /book')
})

module.exports = books