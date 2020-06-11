const express = require('express')
const routes = express.Router()

const ProductController = require('../src/controllers/ProductController')

// Rotas
routes.get('/products', ProductController.index) 
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.create) 
routes.put('/products/:id', ProductController.update) 
routes.delete('/products/:id', ProductController.delete) 

module.exports = routes