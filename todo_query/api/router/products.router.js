var express = require('express');

var productsAPI = require('../controller/products.controller');

var router = express.Router()

router.get('/products', productsAPI.index)

// router.get('/products/page/', productsAPI.pagination)

router.get('/products/page/', productsAPI.search)

module.exports = router