//Grupo 4:
//Leandro Correa, Karina Dominguez, Alejandra Santamaria, Laura Ramos, Eugenia Bonillo, Lara Converso


let piedra = 1; 
let papel = 2;
let tijera = 3;
function datosUsuario (){
    let opcion = parseInt(prompt("Piedra?[1], Papel?[2] o Tijera?[3]"));
    return opcion;
}

function generarDatoMaquina(){
    let random = parseInt(Math.random()*3+1);
    return random;
}


let opcionUsuario = datosUsuario();
let opcionMaquina = generarDatoMaquina();
console.log(opcionUsuario);
console.log(opcionMaquina);

function ganaPiedra(opcionMaquina, opcionUsuario){
    return(opcionUsuario == piedra && opcionMaquina == tijera);
}

function ganaPapel(opcionMaquina, opcionUsuario){
    return(opcionUsuario == papel && opcionMaquina == piedra);
}

function ganaTijera(opcionMaquina, opcionUsuario){
    return(opcionUsuario == tijera && opcionMaquina == papel);
}

function evaluar(opcionMaquina, opcionUsuario){
    return(ganaPiedra(opcionMaquina, opcionUsuario))|| ganaPapel(opcionMaquina, opcionUsuario) || ganaTijera(opcionMaquina, opcionUsuario);
}

function evaluarResultado(opcionMaquina, opcionUsuario){
    let resultado = "Empataron";
    if (opcionUsuario != opcionMaquina) {
        if (evaluar(opcionMaquina, opcionUsuario)) {
            resultado = "Ganador Jugador";
        } else {
            resultado = "Ganador Maquina";
        }
    }
    return resultado;
}

console.log(evaluarResultado(opcionMaquina, opcionUsuario));