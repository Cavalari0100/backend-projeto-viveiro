const Comentario = require("../models/comentariosmodel")


module.exports = app => {
    app.get('/comentario', async(req,res) => {
        const response = await Comentario.find(); 
        res.status(200).send(response);
    })
    app.post('/novocomentario', (req,res) =>{
        document = req.body
        Comentario.insertOne(document,res)
    }) 
    app.put('/comentario/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Comentario.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/comentario/:id', async (req,res) => {
        id = req.params.id;
        Comentario.deleteOne(id,res);
    })

    
}