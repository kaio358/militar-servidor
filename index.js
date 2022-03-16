const express = require('express')
const app = express()

const porta = process.env.PORT || 8081



const atendimento = require('./rotas/atendimento')
const imagemEstatica = require('./rotas/imagens_estaticas')
const conexao = require('./infraestrutura/conexao')
const tabela = require('./infraestrutura/tabelas')


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())


conexao.connect(erro=>{
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso')
        tabela.init(conexao)
        app.use('/',atendimento,imagemEstatica)



        app.listen(porta,()=>{
            console.log('Porta 8081 open');
        })
    }
})

