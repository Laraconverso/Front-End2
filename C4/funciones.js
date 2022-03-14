let tarea = document.getElementById("tarea1");
let btnTarea = document.getElementById("btnTarea");

btnTarea.addEventListener("click", ()=>{
    tarea.classList.toggle("completada");
})

btnactivar.addEventListener("click", ()=>{
    tarea.classList.remove("completada");
})

