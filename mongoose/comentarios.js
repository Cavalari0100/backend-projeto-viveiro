const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let comentarios = mongoose.Schema({
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
module.exports = mongoose.model("Comentarios", comentarios, 'comentarios');
