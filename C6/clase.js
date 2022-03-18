//paralelo a la clase 

const imagenes =document.querySelectorAll("img");
const urlImagenes = [];

imagenes.forEach((_, index) =>{
    const url = prompt(`Ingresa la url para la imagen ${index +1}`);
    urlImagenes.push(url);
})

console.log(urlImagenes);

urlImagenes.forEach((url, index) =>{
    const nodoImagen = document.querySelector(`#imagen-${index +1}`);
    nodoImagen.src = url;
});


