require('dotenv').config()
const express = require('express')

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./app/routes')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

// Health Check API
app.get('/', (req, res) => {
  res.status(200).send('Server is up and running!')
})

app.use('/payment-service', routes)
app.listen(port)

console.log(`The server is up and running on http://localhost:${port}!`)
