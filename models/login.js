const secret = require('../config/secret')
const jwt = require('jsonwebtoken');
const {findByEmail} = require('../models/funcionariomodels')

class Login{
    async getToken(func, res){
        const foundedfunc = await findByEmail(func.email);
        if(!foundedfunc.data){
            res.status(400).send("Usuario nao encontrado")
            return
        }

        if(func.password === foundedfunc.data.password){
            jwt.sign({password: foundedfunc.data.password, email: foundedfunc.data.email}, secret, { expiresIn: '1day' }, (err, token) => { // instead of user:user and token:token, ES6 if the same name can use only the word
                res.json({
                    auth:true,
                    token
                })
            });
        }else{
            res.status(403).send("senha incorreta")
        }
    }
}

module.exports = new Login()