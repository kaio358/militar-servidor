function clica(id) {
    const idDiv = id.target.id
    const idframe = idDiv.split('-')[1]
  
    
    let estado_oculto =  document.getElementById(`${idframe}`)
    if(estado_oculto.style.display=='block'){
        estado_oculto.style.display='none'
        
    }else{
        estado_oculto.style.display='block'
    }
}
function dois_click(id) {
  
    const idDiv = id.target.id
    const idframe = idDiv.split('-')[1]
    

    window.open('/ficha/'+idframe)
}