const Noticia = require("../models/noticiasmodel")


module.exports = app => {
    app.get('/noticia', async(req,res) => {
        const response = await Noticia.find(); 
        res.status(200).send(response);
    })
    app.post('/createnoticia', (req,res) =>{
        document = req.body
        Noticia.insertOne(document,res)
    }) 
    app.put('/noticia/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Noticia.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/noticia/:id', async (req,res) => {
        id = req.params.id;
        Noticia.deleteOne(id,res);
    })

    
}