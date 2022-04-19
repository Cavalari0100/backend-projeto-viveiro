const conexao = require("./infraestrutura/conexao")
const customExpress = require('./config/customExpress') // customExpress recebe o module.export do customExpress.js
var mongooseConection = require("./infraestrutura/conexaoMongoose");
conexao.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('conectado com sucesso');
        const app = customExpress() // app executa o module.export
        app.listen(3001, () => console.log('servidor rodando na porta 3001'));  // Cria um UNIX socket na porta especificada */
  
    }
})