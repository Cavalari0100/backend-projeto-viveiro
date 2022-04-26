const Passaro = require("../models/passaromodel")


module.exports = app => {
    app.get('/passaro', async(req,res) => {
        const response = await Passaro.find(); 
        res.status(200).send(response);
    })
    app.post('/novopassaro', (req,res) =>{
        document = req.body
        Passaro.insertOne(document,res)
    }) 
    app.put('/passaro/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Passaro.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/passaro/:id', async (req,res) => {
        id = req.params.id;
        Passaro.deleteOne(id,res);
    })
}