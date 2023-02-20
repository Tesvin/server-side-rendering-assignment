const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to my book app')
})

const PORT = process.env.PORT

const projectController = require('./controllers/projects_controllers')
app.use('/books', projectController)

app.listen(PORT, () => {
    console.log("server is listening on port 5000")
})