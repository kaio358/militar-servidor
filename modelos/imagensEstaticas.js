const conexao = require('../infraestrutura/conexao')

class ImagensEstaticas{
    adiciona(dados,res){
        const sql = 'INSERT INTO ImagensEstaticas SET ?'
        conexao.query(sql,dados,(erro,resultado)=>{
            if(erro){
                res.status(400).send(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    lista(res){
        const sql = 'SELECT *FROM ImagensEstaticas'
        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).send(erro)
            }else{
                let valor=[]
                let tipo = []
                let id = []
                for(let cont = 0; cont <resultado.length; cont++ ){
                    valor.push(resultado[cont].image.toString('base64'))
                    tipo.push(resultado[cont].tipo)
                    id.push(resultado[cont].idImagem)
                }
                
                res.status(200).json({id:id,imagens:valor,tipo:tipo})
         
            }
        })
    }
    buscaPorId(id,res){
        const sql = `SELECT *FROM ImagensEstaticas WHERE idImagemEstatica=${id}`
        conexao.query(sql,(erro,resultado)=>{
            const imagemEstatica = resultado[0]
            if(erro){
                res.status(400).send(erro)
            }else{
                const b64 = imagemEstatica.image.toString('base64')
                const tipo = imagemEstatica.tipo
                const nome = imagemEstatica.nome
                res.status(200).json({b64:b64,tipo:tipo,nome:nome});
            }
        })
    }
    altera(id,valores,res){
        const sql = `UPDATE ImagensEstaticas SET ? WHERE idImagemEstatica=${id} `
        conexao.query(sql,valores,(erro,resultado)=>{
            if(erro){
                res.status(400).send(erro)
            }else{
                res.status(200).send(resultado)
            }
        })
    }
    deleta(id,res){
        const sql = `DELETE FROM ImagensEstaticas WHERE idImagemEstatica=${id}`
        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).send(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new ImagensEstaticas