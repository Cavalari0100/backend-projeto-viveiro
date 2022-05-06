const Postagembalanca = require("../models/postagembalanca")
module.exports = app => {
    app.get('/postagembalanca', async(req,res) => {
        const response = await Postagembalanca.find(); 
        res.status(200).send(response);
    })
    app.post('/novapostagembalanca', (req,res) =>{
        document = req.body
        Postagembalanca.insertOne(document,res)
    }) 
    app.put('/postagembalanca/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Postagembalanca.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/postagembalanca/:id', async (req,res) => {
        id = req.params.id;
        Postagembalanca.deleteOne(id,res);
    })

    app.get('/postagembalanca/:id', async (req,res)=>{
        const id = req.params.id;
        const post = await Postagembalanca.findById(id);
        res.status(200).send(post);
    })
      
}