/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt("Ingresa tu nombre:").trim();
  while(nombre == ""){
    alert("No ingresaste tu nombre ;( ");
    nombre = prompt("Ingresa tu nombre:").trim();
  }
  datosPersona.nombre = nombre;
  let anioActual = new Date().getFullYear();
  let anioNacimiento = prompt("Ingresa el año en que naciste:").trim();
  while (isNaN(anioNacimiento) || anioNacimiento > anioActual || anioNacimiento == ""){
    alert("El año ingresado no es valido, intente nuevamente...");
    anioNacimiento = prompt("Ingresa el año en que naciste:").trim();
  }
  datosPersona.edad = anioActual - anioNacimiento;
  datosPersona.ciudad = prompt("Ingresa donde vives:").trim();
  while(datosPersona.ciudad == ""){
    alert("Entrada no valida...");
    datosPersona.ciudad = prompt("Ingresa donde vives:").trim();
  }
  let interesado = confirm("¿Te interesa JavaScript?");
  datosPersona.interesPorJs = interesado ? "Si" : "No";
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById('nombre').innerText = datosPersona.nombre;
  document.getElementById('edad').innerText = datosPersona.edad;
  document.getElementById('ciudad').innerText = datosPersona.ciudad;
  document.getElementById('javascript').innerText = datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let contenedor = document.getElementById("fila");
  if(contenedor.innerHTML == ""){
    listado.forEach(info => {
      const tarjeta = `<div class="caja">
      <img src="${info.imgUrl}" alt="${"Logo " + info.lenguajes}">
      <p class="lenguajes">${info.lenguajes}</p>
      <p class="bimestre">${info.bimestre}</p>
      </div>`
      contenedor.innerHTML += tarjeta;
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keydown', (event)=>{
  if(event.key === 'F'||'f'){
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
})
