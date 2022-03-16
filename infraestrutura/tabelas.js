class Tabela{
    init(conexao){
        this.conexao = conexao
        this.criarAtendimento()
        this.criarImagensEstaticas()
    }
    
    criarAtendimento(){
        const sql = `CREATE TABLE IF NOT EXISTS Atendimento (id int NOT NULL AUTO_INCREMENT,nome varchar(255) NOT NULL ,patente varchar(255) NOT NULL ,dataDeChegada datetime , nomeDeGuerra varchar(255), assunto text,PRIMARY KEY(id))`

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela do Atendimento criada com sucesso');
            }
        })
    }
    criarImagensEstaticas(){
        const sql = `CREATE TABLE IF NOT EXISTS ImagensEstaticas (idImagemEstatica int NOT NULL AUTO_INCREMENT,nome VARCHAR(45) NULL,tipo VARCHAR(30) ,image LONGBLOB NULL,PRIMARY KEY (idImagemEstatica))`
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela Imagem Estatica criada com sucesso');
            }
        })
    }

}

module.exports = new Tabela;