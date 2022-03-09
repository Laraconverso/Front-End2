//nombramos los principales selectores 

// document.getElementById(); // el id es algo unico de cada elemento
// document.getElementsByClassName(); //devuelve un array de los elementos con la clase indicada
// document.getElementsByTagName("p"); //devuelve un array de todos los elementos con el tagname indicado
// document.querySelector("p");// mas general puedo buscar cualquier cosa, depende de como lo escribo en los parametros, devuelve el primer elemento encontrado
// document.querySelectorAll("p");//devuelve un array con todos los elementos 


let p3=document.getElementById("3");

p3.innerHTML = `<ul>
                    <li>Soy item</li>
                    <li>Soy item2</li>
                    <li>Soy Item3</li>
                    <li>Soy item4</li>
                    <li>Soy el ultimo item</li>
                </ul>`;

document.getElementById("p1");
document.querySelector("#p1");
document.getElementsByClassName();