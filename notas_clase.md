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
Objeto Window y document 
Seleccionando elementos
### _Notas de clase_


## Clase  :
----
### _Notas del material_
Modificando el DOM
Plantillas de testo
Modificando estilos
Modificando clases
### _Notas de clase_

# Modulo  - 