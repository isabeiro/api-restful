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

module.exports = {
    get,
}