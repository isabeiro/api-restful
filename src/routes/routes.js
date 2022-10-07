const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS) - dentro do express
// GET - obter dados
// POST - enviar/receber dados (do ponto de vista do client está enviando daods, e do servidor está recebendo)
// PUT - atualizar dados
// DELETE - deletar/remover dados

router.get('/products/:id?', ProductController.get) 
// /products/:id? a interrogaçaõ após o id pra dizer q ele é opcional, se não passar id retorna todos os products
router.post('/products', ProductController.post) 
router.put('/products/:id', ProductController.put)  //id obrigatorio para ter referencia para alterar
router.delete('/products/:id', ProductController.remove) 


module.exports = router