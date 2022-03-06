alert("ATENCION!");
console.log(alert("esto es una alerta en consola?"));// aparece como undefinde

confirm("Estas seguro de permitir la cookies?");

console.log(confirm("Estas seguro de permitir la cookies?")); //se muestra la confirmacion 

let confirma = confirm("Estas seguro de permitir la cookies?");
console.log(confirma); // muestra true o false segun lo que respondio el usuario

prompt("Ingrese su nombre"); //se ve como una alerta pero guarda el string que recibe del usuario. 
console.log(prompt("Ingrese su nombre"));