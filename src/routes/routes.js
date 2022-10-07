const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS) - dentro do express
// GET - obter dados
//POST - enviar/receber dados (do ponto de vista do client está enviando daods, e do servidor está recebendo)
// PUT - atualizar dados
// DELETE - deletar/remover dados

router.get('/products', ProductController.get) 
//router.post('/products', ProductController.post) 
//router.put('/products/:id', ProductController.put) 
//router.delete('/products/:id', ProductController.delete) 


module.exports = router