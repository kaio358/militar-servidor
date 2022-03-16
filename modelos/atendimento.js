const conexao = require('../infraestrutura/conexao')
const moment = require('moment')



class Atendimento{
    adiciona(atendimento,res){
        const dataDeChegada = moment().format('YYYY-MM-DD HH:mm:ss')
        
        const sql = `INSERT INTO Atendimento SET ?`
        const atendimentoDatado = {...atendimento,dataDeChegada}
        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                
                res.status(201).json(resultados)
            }
        })
    }
    lista(res){
        const sql = 'SELECT *FROM Atendimento'

        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json(resultados)
                
            }
        })
    }
    buscaPorId(id,res){
        const sql = `SELECT *FROM Atendimento WHERE id=${id} `
        conexao.query(sql, (erro, resultados) => { 
            const atendimento = resultados[0];
            
            if(erro) { 
                res.status(400).json(erro);
            } else {
                var pat = "Patente: "+atendimento.patente
                var nomeGuerra ="Nome de Guerra: "+atendimento.nomeDeGuerra
                var data =  new String (atendimento.dataDeChegada)
                var salva  = data.split(' ')
               
                
                res.status(200).render('../public/paginas/ficha.pug',{nome:atendimento.nome,patente:pat,nomeGuerra: nomeGuerra,data:salva[4],assunto:atendimento.assunto})
    
            }
        })
    }
    delete(id,res){
        const sql = 'DELETE FROM Atendimento WHERE id=?'

        conexao.query(sql,id, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json({id})
            }
        })
    }
}
module.exports = new Atendimento