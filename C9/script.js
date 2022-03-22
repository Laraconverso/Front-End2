window.addEventListener('load', function(){
    let contador = 0;
    let coronometro;
    let timepo = 1000;
    let valor = document.querySelector("#valor");
    let BtnIniciar= document.getElementById("iniciar");
    let BtnPausa= document.getElementById("pausa");
    let BtnStop = document.getElementById("stop");
    let times= document.getElementById("times");


    BtnIniciar.addEventListener('click', function(){
        console.log("click");
        play();
    });
    BtnStop.addEventListener('click', reiniciar);
    BtnPausa.addEventListener('click', pausa);
}) 

function play(){
    coronometro = setInterval(function(){
        contador++;
        console.log(contador);
        renderizar();
    }, tiempo);
}

function renderizar(){
    valor.innerText = contador;
}

function pausar(){
    clearInterval(coronometro);
}

function reiniciar(){
    clearInterval(coronometro);
    times.innerHTML += `<small>Tiempo: $(contador)</small>`
    contador = 0;
    renderizar();
}