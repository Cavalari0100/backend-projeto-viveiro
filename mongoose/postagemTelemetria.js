const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let postagemtelemetria = mongoose.Schema({
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
    categoria: {
        type: String,
        required:[true,"categoria is required"]
    },    
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Postagemtelemetria", postagemtelemetria, 'postagemtelemetria');
