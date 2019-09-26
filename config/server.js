const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
    next()
})

consign()
    .include('./src/Models')
    .include('./src/Controllers')
    .include('./src/Routes')
    .include('./config/dbConnection.js')
    .into(app)

module.exports = app