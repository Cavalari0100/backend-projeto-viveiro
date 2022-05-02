const Postagemtelemetria = require("../models/postagemtelemetria")
module.exports = app => {
    app.get('/postagemtelemetria', async(req,res) => {
        const response = await Postagemtelemetria.find(); 
        res.status(200).send(response);
    })
    app.post('/novapostagemtelemetria', (req,res) =>{
        document = req.body
        Postagemtelemetria.insertOne(document,res)
    }) 
    app.put('/postagemtelemetria/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Postagemtelemetria.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/postagemtelemetria/:id', async (req,res) => {
        id = req.params.id;
        Postagemtelemetria.deleteOne(id,res);
    })

    app.get('/postagemtelemetria/:id', async (req,res)=>{
        const id = req.params.id;
        const post = await Postagemtelemetria.findById(id);
        res.status(200).send(post);
    })
      
}