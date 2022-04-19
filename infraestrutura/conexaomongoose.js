var mongoose = require("mongoose");
var mongooseConection = mongoose.connect("mongodb+srv://administrador:XbkKL5Jx7TTKyYm3@cluster0.abliz.mongodb.net/noticia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongooseConection