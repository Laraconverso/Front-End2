##### Notas tomadas durante la clase. 
# Modulo 1 - Bienvenida e introducción a JavaScript Front
## Clase 1:
----
### _Notas del material_
Origen de JS: </br>
... </br>
RECORDANDO...... </br>
Tipos de variables
```js
    var
    let
    const
```
Estructuras de control
```js 
    if
    if else
    switch
```
Bucles
```js
    for()
    while
    do while
```

Conociendo a la consola del navegador
En general la consola nos sirve para ver que ocurre cuando ejecutamos una tarea o peticion al servidor. </br>
Puede ser que nos devuelva el dato que buscabamos, un error o un aviso. A este proceso de inspeccionar las paginas y encontrar/ cazar errores se lo denomina depurar o debugging. 

Por lo general la consola esteos 2 tipos de errores:
- SyntaxError
- TypeError 

Light house es una herramienta que genera reportes para comprobar ciertos recursos que debe tener la web para ser optima. Entre estos esta la performace, la accesibilidad y el SEO. </br>

Formas de mostrar mensajes en la consola, o en el navegador
```js
console.log("mensaje.");
console.error("Muestra el msj con caracteristica de error.");
console.warn("Muestra el msj como advertencia.");
console.table("Muestra la info como tabla");
alert("genera una alerta en el navegador con el contenido del msj.");
```

### _Notas de clase_

DOM -> document object model, es la representacion de la estructura de mi documento html. </br>

Como con las hojas de estilo, se recomienda armar un file aparte. </br>
Dentro del HTML se recomienda linkear el archivo del script al final del body, para asegurarnos que ya leyo toda la pagina antes de correr el script. Esto ultimo depende de la finalidad del sitio, y preferencias del desarrollador. </br>


## Clase 2: Intro 
-----
### _Notas del material_
Capturando datos del usuario: </br>
```js
    alert("Esto es una alerta"); //aparece una alerta en la venta del navegador. 
    prompt("Ingrese datos");// aparece una alerta en la venta del navegador y almacena los datos ingresados por el usuario en forma de strings. 
    confirm("Desea aceptar?"); //aparece una alerta en la venta del navegador, la respuesta se almacena como booleano. 
```

[Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math#propiedades): </br>
Es un objeto ya inventado de js. 
Algunos de sus metodos mas utilizados/ conocidos: 
```js
    Math.PI; // retorna el numero de pi.
    Math.random(); //selecciona aleatoriamente.
    Math.round(); //redondea al mas cercano de un numero.
    Math.max(); // retorna el mayor de cero o mas numeros.
```
Parseo</br>
```js
    ParseInt(""); //recibe un string y lo devuelve numero.
    ParseFloat(""); //retorna los numeros decimales 
    Nan(); //Not a number
```
Bucles especificos: </br>

```js
    for(let propiedad in objeto);
    //la propiedad funciona como iterador y el objeto es sobre el cual vamos a iterar.
    for(let variable of elementoIterable);
    //la variable funcionara como iterador y el elementoIterable es sobre quien vamos a iterar.

```

### _Notas de clase_
diferencias entre como declarar las variables en js:
Es un lenguaje no tipado, la variable es una bolsa que agarra la forma de lo que le metemos adentro. </br>
3 formas de declarar varibles: </br>
```js
    var numero = 15;
```
Declarando la variable con `var` y luego lo vuelvo a hacer se sobreescribe. 
A partir de ESC6 se comenzo a utilizar `let ` para declarar las variables en este caso se declaran por entorno. 

Hacemos ej de piedra papel y tijera en grupos. 


# Modulo 2 - 
## Clase 3:
----
### _Notas del material_
`document.getElementById();` // el id es algo unico de cada elemento</br>
`document.getElementsByClassName();` //devuelve un array de los elementos con la clase indicada </br>
`document.getElementsByTagName("p");` //devuelve un array de todos los elementos con el tagname indicado </br>
`document.querySelector("p");`// mas general puedo buscar cualquier cosa, depende de como lo escribo en los parametros, devuelve el primer elemento encontrado </br>
`document.querySelectorAll("p"); `//devuelve un array con todos los elementos
</br> 

### _Notas de clase_
Armamos una pagina con ejemplos que se encuentra ubicada en la carpeta C3
la actividad de la mesa se encuentra en la carpeta C3 en la carpeta actividad_clase
## Clase 4:
----
### _Notas del material_
Objeto Window y document </br>
El objeto Window se utiliza para leer y manipular la ventana del navegador. Mientras que el objeto Document se encarga del contenido. Desde el document podemos modificar las clases y estilos de nuestro HTML. Mientras que desde el Window podríamos leer y modificar la locación de nuestro navegador. </br>
Seleccionando elementos </br>
DOM selectores</br>
Para acceder a los elementos de una pagina, usamos selectores. Cada selector puede retornar un solo elemento o una lista de elemntos. Para poder hacer uso de los selectores debemos hacer uso del objeto document, ya que los selectores son metodos del mismo.</br>
`querySelector()`
```js
    let titulo = document.querySelecto('.title');
```
`querSelectorAll()`
```js
    let nombres = document.querySelectorAll('.name');
```
`getElementById()`
```js
    let marca = document.getElementById('marca');
```
comparando selectores:</br>
| querySelector()| querySelectorAll()| getElementById()|   
|----------------|-------------------|-----------------|
| Retorna el primer elemento del DOM que cumplecon la condicion que buscamos. | Retorna todos los elementos del DOM que cumplen con la condicion que buscamos. | Retorna el elemento del DOM que cumpla con el id que buscamos. |


</br>

### _Notas de clase_
window.location --> nos retorna la URL de la pagina.
## Clase 5:
### _Notas de clase_
Modificando el DOM</br>
`document.querySelector()` es uno de los selectores que permite elegir que elemento se quiere modificar del DOM. </br>
La propiedad `.innerHTML` al ser utilizada para escritura reemplaza completamente lo que ya estaba, con el operando `+=` se agrega el contenido al que ya estaba. </br>
Con la propiedad `innerText` sirve para leer o modificar el texto de una etiqueta HTML.</br>
```js
    document.querySelector('div.nombre').innerText; //--> retorna lo que este escrito en ese elemento. 
    document.querySelector('div.nombre').innerText = 'Lara'; //--> reemplaza lo que estaba escrito por Lara, en este caso. 
    document.querySelector('div.nombre').innerText += 'Messi'; //--> agrega el Messi 
```

## Clase 6:
----
### _Notas del material_
### _Notas de clase_

# Modulo 3

## Clase 7:
----
### _Notas del material_
### _Notas de clase_


## Clase 8:
### _Notas del material_
Eventos:</br>
Un evento es una accion que transcurre en el navegador o que es ejecutada por el usuario.</br>
`onload` permite que todo el script se ejecute cuando se haya cargado por comlejto el objeto document dentro del objeto window.
```js
    window.onload = function(){
        console.log('el documento esta listo');
    }
```
`onclick` este evento nos permite ejecutar una accion cuando se haga click sobre el elemento al cual le estamos aplicando la propiedad. 
```js
    btn.onclick = funciton(){
        console.log('hiciste click');
    }
```
`preventDefault()` Nos permite evitar que se ejecute el evento predetermiado del elemento al que se lo estamos aplicando. 
```js
    let hipervinculo =document.querySelector('a');
    hipervinculo addEventListener('click', function(event){
        console.log('hiciste click');
        event.preventDefault();
    });
```
Lista de eventos mas utilizados:</br>
- `onclick`
- `ondbliclick`
- `onmouseover` 
- `onmousemove`
- `onscroll`
- `onkeydown`
- `onload`
- `onsubmit`

Eventos del teclado</br>
...

### _Notas de clase_
La actividad de clase se encuentra en la carpeta `C8`.

## Clase 9:
----
### _Notas del material_
### _Notas de clase_

## Clase 10:
### Entregable.

## Clase 11:
### _Notas del clase_
Formularios:</br>
Todos los eventos de los formularios tienen inputs. - Rip prompts - </br>
Los checkboxes del mismo grupo deben tener el mismo name 

## Clase 12:
### _Notas del clase_
Catch-up.</br>

Armamos un ecommerce, el contenido de hoy se encuentra en la carpeta `C13`

# Modulo 4 - 
## Clase 13:
----
### _Notas del material_
Formularios II: </br>
Eventos del formularios: </br>
- focus: sucede cuando el usuario ingresa con el cursor en un campo input.
- blur: sucede cuando el cursor abandona el cmapo en donde se encuentra.
- change: sucede cuando cambia 
- submit
- preventDefault
- this
- this.value
</br>
Validando desde el lado del cliente

1. Capturar el formulario:
```js
let formulario = document.querySelector("from.reservation")
let formulario = document.forms["reservation"]
```
Eventos del formulario -> submit.
Validando los campos--> obtenemos el input

### _Notas del clase_

## Clase 14:
----
### _Notas del material_
JSON y Storage:</br>
Metodos json:
```js
JSON.parse()// = JSON --> JS
JSON.stringify()//=JS--> JSON
```
LocalStorage:</br>
```js
localStorage.setItem()
localStorage.getItem()

```

### _Notas del clase_
- Ver ejercicio de practica de JSON.
el ej de las mesas se encuentra en `C14`

## Clase 15:
----
### _Notas del material_
Catchup + To-Do app.
### _Notas del clase_
hicimos una actividad esta dentro de la carpeta correspondiente. `C15/ej_mesas`

# Modulo 5 - 
## Clase 16:
----
### _Notas del material_
AJAX: </br>
AJAX (Asynchronous JavaScript and XML) es un conjunto de tecnologías que se utilizan para crear aplicaciones web asíncronas. Esto las vuelve más rápidas y con mejor respuesta a las acciones del usuario.</br>
Pasos de el accionar ajax:</br>
1. Se produce un evento en una página web (se carga la página, se hace clic en un botón)
2. JavaScript crea un objeto XMLHttpRequest
3. El objeto XMLHttpRequest envía una solicitud a un servidor web
4. El servidor procesa la solicitud.
5. El servidor envía una respuesta a la página web.
6. La respuesta es leída por JavaScript.
7. JavaScript realiza la acción adecuada (como la actualización de la página)
</br>
HTTP</br>
HTTP o Hypertext Transfer Protocol es un protocolo de intercambio de datos en la Web entre cliente y servidor. Los mensajes HTTP forman una estructura como medio para realizar una petición de datos iniciada por el cliente, normalmente un navegador web, en busca de su respuesta ejecutada por el servidor. De esta manera, se resuelve una o más tareas, a través de mecanismos que veremos más adelante. </br>

El protocolo HTTP es extensible, esto significa que con el tiempo se ha permitido que se implementen más funciones de control y funcionalidad sobre la Web: caché o métodos de identificación o autenticación.</br>

En versiones anteriores, los mensajes HTTP eran textos planos. En HTTP/2, los mensajes están estructurados en un nuevo formato, lo que contribuye a una mayor legibilidad y debugging más eficiente.</br>
</br>
Existen 2 tipos de asincronismo: </br>

- Concurrencia: cuando las tareas pueden comenzar, ejecutarse y completarse en períodos de tiempo superpuestos, en donde al menos dos hilos están progresando
- Paralelismo: cuando dos o más tareas se ejecutan exactamente al mismo tiempo.
La diferencia entre la concurrencia y el paralelismo está en que, en el primer caso, no implica que las tareas terminen de ejecutarse al mismo tiempo literalmente como sí ocurre en el segundo caso. Además, decimos que JavaScript es un lenguaje no-bloqueante porque las tareas no se quedan bloqueadas esperando a que finalicen evitando proseguir con el resto de tareas.</br>

Metodos de peticion: (REQ)</br>
`GET` -->solicitar datos
`POST` --> enviar/ crear un dato
`DELETE` --> reemplazar un dato
`PUT` --> modificar parcialment un dato
`PATCH` --> borrar un dato

### _Notas del clase_
promesa--> objeto que nos permite decidir si recibo o no lo que estoy esperando </br>
`resolve`--> si se cumple</br>
`reject` --> si no se cumple</br>
`then`--> para la respuestas favorables (positivas)</br>
`catch` --> ocurre si hay un error 


## Clase 17:
----
### _Notas del material_
APIs:</br>
ver carpeta clas 17
### _Notas del clase_
hacemos ej de fetch api en la carpeta de la `C17`

## Clase 18:
----
### _Notas del material_
### _Notas del clase_

## Clase 19:
----
### _Notas del material_
### _Notas del clase_


-----------
# Modulo 6 - 
## Clase ?:
----
### _Notas del material_
### _Notas del clase_