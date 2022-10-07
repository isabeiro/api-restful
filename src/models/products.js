const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
}) //prestar atenção para não dar erro qndo passar os valores

const Model = mongoose.model('products', schema)

module.exports = Model