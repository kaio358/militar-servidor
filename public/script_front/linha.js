var linhaAtual = 13

function gerarLinha(){

    var dropZone = document.getElementById('dropZone') 
    var gerador_variavel_div = document.createElement('div')
    var linha_texto = document.createTextNode(linhaAtual)
    gerador_variavel_div.classList.add('linhas')

    dropZone.appendChild(gerador_variavel_div)
    gerador_variavel_div.appendChild(linha_texto)
    linhaAtual++

}
 




