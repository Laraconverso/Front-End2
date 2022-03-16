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



<!-- ## Clase 3:
----
### _Notas del material_
??? 
### _Notas de clase_
??? -->

# Modulo 2 - 
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


## Clase 3 :
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
### _Notas_
Modificando el DOM</br>
`document.querySelector()` es uno de los selectores que permite elegir que elemento se quiere modificar del DOM. </br>
La propiedad `.innerHTML` al ser utilizada para escritura reemplaza completamente lo que ya estaba, con el operando `+=` se agrega el contenido al que ya estaba. </br>
Con la propiedad `innerText` sirve para leer o modificar el texto de una etiqueta HTML.</br>
```js
    document.querySelector('div.nombre').innerText; //--> retorna lo que este escrito en ese elemento. 
    document.querySelector('div.nombre').innerText = 'Lara'; //--> reemplaza lo que estaba escrito por Lara, en este caso. 
    document.querySelector('div.nombre').innerText += 'Messi'; //--> agrega el Messi 
```

# <span>Modulo  3 </span>

## Clase 5:
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


### _Notas de clase_