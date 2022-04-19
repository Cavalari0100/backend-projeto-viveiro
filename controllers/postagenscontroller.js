const Postagem = require("../models/postagensmodel")


module.exports = app => {
    app.get('/postagem', async(req,res) => {
        const response = await Postagem.find(); 
        res.status(200).send(response);
    })
    app.post('/novapostagem', (req,res) =>{
        document = req.body
        Postagem.insertOne(document,res)
    }) 
    app.put('/postagem/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Postagem.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/postagem/:id', async (req,res) => {
        id = req.params.id;
        Postagem.deleteOne(id,res);
    })

    
}