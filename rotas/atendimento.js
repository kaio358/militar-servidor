const express = require('express')
const rota = express()


const atendimento = require('../modelos/atendimento')

rota.get('/',(req,res)=>{
    res.render('../public/paginas/agenda.pug')  
})

rota.get('/lista',(req,res)=>{
    atendimento.lista(res)
})
rota.get('/cadastro',(req,res)=>{
    res.status(200).render('../public/paginas/cadastro.pug')
})
rota.post('/cadastro',(req,res)=>{
    const dados = req.body
    atendimento.adiciona(dados,res)
   
})

rota.get('/ficha/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    atendimento.buscaPorId(id,res)
})

rota.get('/deleta/:id',(req,res)=>{
    const id = parseInt(req.params.id)
   
    atendimento.delete(id,res)
})

module.exports = rota