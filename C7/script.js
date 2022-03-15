const imagenes = document.querySelectorAll("img");
const urlImagenes = [];

imagenes.forEach((_, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  urlImagenes.push(url);
  
});

console.log(urlImagenes);

urlImagenes.forEach((url, index) => {
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
  nodoImagen.src = url;
  const urlImagen = document.querySelector(`#rutas-img${index+1}`);
  urlImagen.href = url;
  console.log(urlImagen);
  urlImagen.target = "_blank";
});



/* Etapa
- Nodo padre: seria el div con la clase contenedor
- Nodo hijo repetitivo: los divs con la clase  tarjetas 
-Explicacion: 
Se podria generar un nodo por cada tarjeta en las que varian las urls. 

*/























// let nuevoP=document.createElement("p");

// nuevoP.innerText="Hola!";

// document.body.appendChild(nuevoP)