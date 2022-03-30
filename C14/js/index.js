const busqueda=document.getElementById('comentario')

const form=document.querySelector('form')

const contenedorComentarios=document.querySelector('.comentarios')

let comentariosRealizados = JSON.parse(localStorage.getItem('historial'));

if(comentariosRealizados){
    renderizarComentarios(comentariosRealizados);
}else{
    comentariosRealizados=[]
}

function captarData(){
    let buscado = busqueda.value.trim();
    console.log('valor',buscado);
    return buscado
}

form.addEventListener('submit', (e)=>{
    // e.preventDefault();

    let comentarioActual = captarData();
    comentariosRealizados.push(comentarioActual);
    console.log('comentarios realizados',comentariosRealizados);
    

    //almaceamos las busquedas en localStorage
    localStorage.setItem('historial', JSON.stringify(comentariosRealizados));
 
    
});


// renderizar busquedas almacenadas
function renderizarComentarios(listado) {
    listado.forEach(element => {
        let nodo = document.createElement('p');
        let texto = document.createTextNode(element);
        nodo.appendChild(texto);
        contenedorComentarios.appendChild(nodo);
    });
    
}




