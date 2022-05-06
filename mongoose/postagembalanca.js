const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let postagembalanca = mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "titulo is required"]
    },
    conteudo: {
        type: String,
        required:[true,"conteudo is required"]
    },
    autor: {
        type: String,
        required:[true,"autor is required"]
    },    
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Postagembalanca", postagembalanca, 'postagembalanca');
