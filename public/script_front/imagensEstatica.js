async function getImage(){
    try{ 
        const rensponse = await fetch("http://localhost:8081/imagensEstaticas")
        const data = await rensponse.json()
       
        gerarImage(data)
    }catch(error){
        console.log(error);
    }
}
getImage()
function gerarImage(data){
    
    const img = [] 
    let passo =0
    let imagem_seta = document.getElementsByTagName('img')
   
    for(let b64 of data.imagens){
        img.push( `data:${data.tipo[passo]};base64,${b64}`)
        imagem_seta[passo].src = ( `data:${data.tipo[passo]};base64,${b64}`)
        passo++
    }
    
    
}