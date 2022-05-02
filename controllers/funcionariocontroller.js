const Funcionario = require("../models/funcionariomodel")
module.exports = app => {
    app.get('/funcionario', async(req,res) => {
        const response = await Funcionario.find(); 
        res.status(200).send(response);
    })
    app.post('/novafuncionario', (req,res) =>{
        document = req.body
        Funcionario.insertOne(document,res)
    }) 
    app.put('/funcionario/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Funcionario.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/funcionario/:id', async (req,res) => {
        id = req.params.id;
        Funcionario.deleteOne(id,res);
    })

    app.get('/funcionario/:id', async (req,res)=>{
        const id = req.params.id;
        const post = await Funcionario.findById(id);
        res.status(200).send(post);
    })
      
}