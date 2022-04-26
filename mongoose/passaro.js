const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let passaro = mongoose.Schema({
    especie: {
        type: String,
        required: [true, "especie is required"]
    },
    nome: {
        type: String,
        required:[true,"nome is required"]
    },
    caracteristica: {
        type: String,
        required:[true,"caracteristica is required"]
    },
    historia: {
        type: String,
        required:[true,"historia is required"]
    },
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Passaro", passaro, 'passaro');
