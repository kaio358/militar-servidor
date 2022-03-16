
const express = require('express')
const rota = express()

const imagensEstaticas = require('../modelos/imagensEstaticas')
const multer = require('multer')


const storage = multer.memoryStorage()
const upaload = multer( {storage:storage})


rota.get('/imagensEstaticas',(req,res)=>{
    imagensEstaticas.lista(res)
});

rota.post('/imagensEstaticas',upaload.single('image'),(req,res)=>{

    const nome = req.body.nome
    const imagens = req.file.buffer
    const tipo = req.file.mimetype

    
    imagensEstaticas.adiciona({nome:nome,image:imagens,tipo:tipo},res)
})
rota.get('/imagensEstaticas/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    
    imagensEstaticas.buscaPorId(id,res)
})
module.exports = rota