async function getFicha(){
    try{ 
        const rensponse = await fetch(`http://localhost:8081/lista`)
        const data = await rensponse.json()
       
        gerarFicha(data)
    }catch(error){
        console.log(error);
    }
}
getFicha()
function gerarFicha(data){
   
    // elemento pai 
    const elemento_pai = document.getElementById("origin_01")
    const parente = document.getElementsByClassName('example-parent')[0]
    
    for(let ficha of data){
  

        var gerador_variavel_div = document.createElement('div')

        var p1 = document.createElement('p')
        var p2 = document.createElement('p')

        gerador_variavel_div.classList.add('example-draggable')
        gerador_variavel_div.setAttribute('id',"draggable-"+ficha.id)
        gerador_variavel_div.setAttribute('draggable',true)

     
        gerador_variavel_div.addEventListener("dragstart",onDragStart,event)
        gerador_variavel_div.addEventListener("click",clica,ficha.id)
        gerador_variavel_div.addEventListener('dblclick',dois_click,ficha.id)
        

        elemento_pai.appendChild(gerador_variavel_div)



        var nome = document.createTextNode('Nome: '+ficha.nome)
        var patente = document.createTextNode('Patente: '+ficha.patente)
        

        gerador_variavel_div.appendChild(p1)
        gerador_variavel_div.appendChild(p2)
        p1.appendChild(nome)
        p2.appendChild(patente)

        // frame 

        var frame = document.createElement('iframe')

        parente.appendChild(frame)
        frame.setAttribute('id',ficha.id)
        frame.src = '/ficha/'+ficha.id
        
        
    }
    
    
}