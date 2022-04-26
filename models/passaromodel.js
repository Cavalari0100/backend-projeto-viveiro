const conexao = require('../infraestrutura/conexao')
const { MongoCliente, ObjectId } = require("mongodb")
const conecta = conexao.db("noticia").collection("passaro")
var mongooseConection = require("../infraestrutura/conexaoMongoose")
const { Error } = require("mongoose")
const passaro = require("../mongoose/passaro")
const { param } = require('express/lib/request')


class Passaro {

    async find() {
        const result = await conecta.find().toArray();
        return result;
    }

    async insertOne(document, res) {
        const doc = new passaro(document)
        try {
            await doc.save(function (error, result) {
                if (error) {
                    res.status("400").send(error)
                } else {
                    res.status("200").send(result)
                }
            })
        }
        catch (e) {
            console.log(e)
        }

    }
    async deleteOne(id, res) {
        const query = { _id: ObjectId(id) };
        let result = null;
        try {
            result = await conecta.deleteOne(query);
        } catch (e) {
            console.log(e);
        } finally {
            if (result != null) {
                res.status(200).send(result);
            } else res.status(400).send("Erro");
        }
    }
    async updateOne(id, data) {
        const result = await passaro.updateOne({ _id: ObjectId(id) }, { $set: data }).then((result, err) => {
            if (err) {
                return { status: 400, response: err }
            } else {
                return { status: 200, response: "Modified: " + result.nModified }
            }
        })
        return result;
    }   

}
module.exports = new Passaro 