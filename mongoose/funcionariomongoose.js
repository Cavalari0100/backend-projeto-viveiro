const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let funcionario = mongoose.Schema({
    nomefuncionario: {
        type: String,
        required: [true, "nomefuncionario is required"]
    },
    email: {
        type: String,
        required:[true,"email is required"]
    },
    password: {
        type: String,
        required:[true,"password is required"]
    },
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Funcionario", funcionario, 'funcionario');
