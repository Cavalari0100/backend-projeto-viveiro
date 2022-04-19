const Login = require('../models/login')

module.exports = app => {
    app.post('/loginfuncionario', (req,res) => {
        Login.getToken(req.body,res)
    })
}