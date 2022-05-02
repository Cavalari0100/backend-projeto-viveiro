const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let funcionario = mongoose.Schema({
    nome: {
        type: String,
        required: [true, "nome is required"]
    },
    email: {
        type: String,
        required:[true,"email is required"]
    },   
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Funcionario", funcionario, 'funcionario');
