const express = require('express')
const app = express()
const port = 3000


const productsAPI = require('./api/router/products.router')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Shopping', { useFindAndModify: false, useCreateIndex: false });

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/Shopping', productsAPI)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})