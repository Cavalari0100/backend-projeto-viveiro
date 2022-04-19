const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let noticia = mongoose.Schema({
    textoprincipal: {
        type: String,
        required: [true, "textoprincipal is required"]
    },
    previatexto: {
        type: String,
        required:[true,"previatexto is required"]
    },
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Noticia", noticia, 'noticia');
