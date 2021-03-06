const conexao = require('../infraestrutura/conexao')
const { MongoCliente, ObjectId } = require("mongodb")
const conecta = conexao.db("iberia_web_site").collection("postagembalanca")
var mongooseConection = require("../infraestrutura/conexaoMongoose")
const { Error } = require("mongoose")
const postagembalanca = require("../mongoose/postagembalanca")
const { param } = require('express/lib/request')


class Postagem {

    async find() {
        const result = await conecta.find().toArray();
        return result;
    }

    async insertOne(document, res) {
        const doc = new postagembalanca(document)
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
        
        const result = await postagembalanca.updateOne({ _id: ObjectId(id) }, { $set: data }).then((result, err) => {
            if (err) {
                return { status: 400, response: err }
            } else {
                return { status: 200, response: "Modified: " + result.nModified }
            }
        })
        return result;
    }   
    async findById(id, res) {
        const result = await postagembalanca.findOne({ _id: ObjectId(id) }).then(data => {
            return ({
                success: true,
                titulo : data.titulo,
                conteudo: data.conteudo,
                autor: data.autor,
                categoria: data.categoria
            })
        }).catch(err => {
            return ({
                success: false,
                data: err,
            })
        });
        return (
            result
        )
        
    } 



}
module.exports = new Postagem 