const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let postagens = mongoose.Schema({
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
    imagemostagem:
    {
        data: Buffer,
        contentType: String
    }
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Postagens", postagens, 'postagens');
