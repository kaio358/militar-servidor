function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
   
}
function onDragOver(event) {
    event.preventDefault();
}
function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}

function onDropRemove(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    
    const idDelete = id.split('-')[1]

    if (draggableElement.parentNode) {
        draggableElement.parentNode.removeChild(draggableElement);
      }

    async function myFunction() {
        let opt = {
            method: 'GET',
            cache:'default'
        }
        
        const dados = await fetch(`http://localhost:8081/deleta/${idDelete}`,opt)
        

    }
    myFunction()
}