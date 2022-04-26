var mongoose = require("mongoose");
var mongooseConection = mongoose.connect("mongodb+srv://administrador:b7LPZKQSanElSzx4@cluster0.abliz.mongodb.net/noticia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongooseConection