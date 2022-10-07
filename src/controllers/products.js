const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    /*let obj = {}
    //deixa obj vazio pois se não achar id manda ele vazio mesmo

    if (id) {
        obj._id = id
    }*/
    //caso ache id manda esse id no ProductsModel pra localizar o produto

    //outra foirma de inserir o id só qndo achar 
    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

// cadastrando, enviando dados
async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body //.body pq é metodo post

    console.log(req.body)   //para ver o que esta chegando nio req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'success'
    })  //devolve pra api
}

module.exports = {
    get,
    post,
}