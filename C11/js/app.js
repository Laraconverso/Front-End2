window.addEventListener('load', function () {
    

    /* -------------------------------- variables ------------------------------- */
    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    let valor=document.querySelector("#valor");
    let btnIniciar=document.getElementById("iniciar");
    let btnPausa=document.getElementById("pausa");
    let btnStop=document.getElementById("stop");
    let times=document.getElementById("times");
    let btnAcelerar=document.getElementById("acelerar");
    let tengoIntervalo=false;
   
    /* -------------------------------- LISTENERS ------------------------------- */
    btnIniciar.addEventListener('click', function () {
        console.log("click");
        play();
    }); 
    btnStop.addEventListener('click', reiniciar);
    btnPausa.addEventListener('click', pausar);
    btnAcelerar.addEventListener('click', acelerar);


    /* -------------------------------------------------------------------------- */
    /*                                  FUNCIONES                                 */
    /* -------------------------------------------------------------------------- */
    //definimos la funcionalidad de iniciar el cronometro
    function play() {
        cronometro = setInterval(function () {
            contador++;
            console.log(contador);
            renderizar();
            tengoIntervalo=true;
        }, tiempo);
    };
    
    // difinimos la responsabilidad de la funcion renderizar
    function renderizar() {
       valor.innerText=contador;
    }

    // definimos la funcion de pausar
    function pausar() {
        if (tengoIntervalo){
            clearInterval(cronometro);
            tengoIntervalo=false;
            console.log(tengoIntervalo);
        } else play();
    }

    // definimos la funcionalidad del boton stop
    function reiniciar() {
        clearInterval(cronometro);
        times.innerHTML += `<small>Tiempo: ${contador}</small>`
        contador = 0;
        renderizar();
        tiempo=1000;
    }

    // definimos la funcionalidad de acelerar
    // - duplicar la velocidad del cronometro
    // - que se puede seguir multiplicando(duplicando la velocidad)
    
    function acelerar() {
        tiempo = tiempo / 2;
        console.log(tiempo);
    }


});








// valor.innerText = contador;

// clearInterval(cronometro);

// const valor = document.querySelector('#valor');
// const btnIniciar = document.querySelector('#iniciar');
// const btnStop = document.querySelector('#stop');
// const btnPausa = document.querySelector('#pausa');
// const times = document.querySelector('#times');