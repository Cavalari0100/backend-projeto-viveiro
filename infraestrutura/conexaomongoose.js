var mongoose = require("mongoose");
var mongooseConection = mongoose.connect("mongodb+srv://Administrador:utub6lttfJEe8SSS@cluster0.lbgxy.mongodb.net/iberia_web_site", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongooseConection