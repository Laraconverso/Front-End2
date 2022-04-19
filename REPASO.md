## Repaso final Front2


#### *Características mas importantes de JavaScript:*
Interpretado, orientado a prototipos, tipado débil y dinámico.


#### *¿Cuál es la diferencia entre localStorage y sessionStorage?*
Ambas almacenan datos en el browser. LocalStorage lo hace sin expiracion y
sessionStorage hasta que el navegador se cierra

#### *¿Qué función podemos utilizar para retrasar la ejecución de un bloque de código?*
setTimeout()

#### *¿Qué particularidad brinda Javascript a la hora de incorporarlo a un sitio?*
Dinámica

#### *Por qué los desarrolladores utilizamos DevTools?*
- Porque podemos crear un programa directamente desde el navegador.
- Porque tiene informacion valiosa en cada una de sus ventanas para encontrar soluciones.
- Porque podemos encontrar y manejar los errores de nuestra aplicación.

#### *Escribe el endpoint completo de la API Random User que devuelva 25 usuarios*
https://randomuser.me/api/?results=25 

#### *¿Qué método podemos usar para agrear o quitar una clase de un elemento?*
classList.toggle()

#### *¿Que método podemos utilizar para que un usuario pueda ingresar datos?*
prompt

#### *¿Cómo podemos eliminar los espacios restantes que existen a los lados de una cadena de texto?*
trim()

#### *¿Con cuál de las siguientes opciones podemos insertar un nuevo nodo en el DOM?*
innerHTML

#### *El segundo parámetro de setTimeOut recibe un valor expresado en...*
milisegundos

#### *Como funciona el Math.Random()?*


#### *¿Cuál es el resultado de parsear un elemento JSON del localStorage que no existe?*
null

#### *¿Cómo está compuesta una petición?*
Headers, Method y Body

#### *¿Con qué método podemos agregar un id a un nodo seleccionado?*
setAttribute()

#### *¿Por qué el DOM y el documento HTML tienen los mismos elementos?*
Porque el DOM es un reflejo del HTML

#### *¿De qué manera podemos capturar un error para manejarlo y evitar que la ejecución del código se detenga?*
catch()

#### *¿Cómo puedo obtener la url de la página actual?*
window.location.href

#### *Como se recupera el JWT?*
```js
JSON.parse(
    localStorage.getItem(
        'jwt'
    )
);
```

### *Eventos validos de JS*
- mouseover
- load
- keydown

#### *Cual es el valor de retorno de un fetch?*
una promesa

#### *¿Cómo detenemos el accionar de un formulario en el evento submit?*
preventDefault()

#### *¿Qué método nos permite saber si un nodo tiene una clase determinada?*
classList.contains

#### *¿Que capturamos en el primer .then() de un fetch?*
un objeto de tipo respuesta

#### *¿En qué pestaña de las DevTools podemos ver la información de sessionStorage?*
Application

#### *¿Cuál de los siguientes códigos de respuesta representa un error de la petición del lado del cliente?*
404

#### *Cuando fetch() recibe un solo parámetro, se realiza un pedido a través del método...*
GET

#### *METODOS HTTP*
- PUT
- GET
- DELETE

#### *¿Qué evento usamos comunmente para enviar formularios?*
submit

#### *¿Qué representan los códigos de estado HTTP?*
- Respuestas
- Redirecciones
- Errores

#### *¿Qué método nos permite saber si un nodo tiene una clase determinada?*
classList.contains

#### *Que hace var?*
Declara una variable global o en el ambito de una funcion.

#### *Que hace let?*
Declara una variable en el ambito de un bloque. 

#### *Que hace const?*
Declara una constante en el ambito de un bloque. 

#### *Tipos de variables*
``` let myVariable = "Hello World"; ``` es un String. </br>
``` let myVariable1 = 22; ``` es un number. </br>
``` let myVariable2 = false; ``` es un boolean. </br>
``` let myVariable3; ``` es un undefined. </br>
``` let myVariable4 = {nombre: 'mi nombre'}; ``` es un objeto let. </br>
``` let myVariable5 = null; ``` es un objeto(es un tipo de objeto especial). </br>
``` let myVariable6 = function(){let doSomething}; ``` es una function </br>

#### *Como se comprueban los tipos de variables?*
typeOf()

#### *Estructuras*
- ```if``` Permite ejecutar un bloque solo si se cumple una condicion dada.
- ```If...else``` Permite evaluar una condicion y ejecutar un bloque de codigo u otro. 
- ``` Switch``` Permite ejecutar diferentes acciones dependiendo del valor de una variable. 

#### *Bucles*
- _For_  Permite ejecutar repetitivamente un bloque de codigo. ```for(inicial;condicion;fina;)```
- _While_ se ejecuta hasta que la condicion sea verdadera ```while(condiicon){}```
- _Do... while_ Ejecuta un bloque de codigo mientras una condicion sea verdadera. A diferencia del while la condiicon se evalua al final de cada ejecucion. 
```do{...} while (condicion)```

#### *¿Qué combinación de teclas abre la consola del navegador?*
Ctrl, Shift + I, Además de F12. 

#### *¿Qué resultado obtengo si ejecuto el siguiente código? console.log(5+5)*
10

#### *Puedo crear una variable directamente en la consola.*
Verdadero

#### *La consola solo es visible para los usuarios que están logueados.* 
Falso

#### *A través de la consola puedo modificar páginas web.*
Verdadero

#### *¿Cuál es la función principal de la consola?*
Depurar páginas web.

#### *¿Puedo activar o desactivar la consola en mi sitio web?*
Jamás, es una herramienta del navegador.

#### *Al cerrar la consola pierdo todos los cambios que realicé en la misma.*
Falso

#### *Tipos de vinculacion de JS*
- Interna(incurstado en el HTML)
- Externa(en un archivo a parte)

#### *Formas de capturar datos*
- ```prompt()``` --> muestra un cuadro de diálogo con mensaje opcional, que solicita al usuario que introduzca un texto. 
- ```confirm()``` --> muestra un cuadro de diálogo con un mensaje opcional y dos botones, “Aceptar” y “Cancelar”. (Los datos capturados son true o false).

#### *¿Qué método de window usamos en JavaScript para que el usuario ingrese datos por teclado?*
prompt()

#### *Cuál es la diferencia entre alert y confirm?*
Con alert hay un botón para aceptar que el mensaje fue recibido, confirm hace una consulta al usuario y este decide por “Aceptar” o “Cancelar”.

#### *Si no completo un dato en prompt y pulso “Aceptar”, retorna por defecto una cadena de texto vacío.*
verdadero

#### *Los datos obtenidos con cualquiera de los métodos de window se almacenan automáticamente y se visualizan en consola.*
Falso

