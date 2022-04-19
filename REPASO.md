## Repaso final Front2


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

#### *¿Qué retorna un prompt() si el usuario presiona “Cancelar”?*
null

#### *¿Qué tipo de dato almacena un confirm()?*
booleano

#### *Que hace el parseInt()?*
Esta función parsea una cadena de texto y devuelve un número.

#### *Que hace el parseFloat()?*
Esta función parsea una cadena de texto y devuelve un número y los números decimales que existan.

#### *Que hace NaN?*
La propiedad NaN nos indica que el valor no es un número (Not A Number), por lo que esto nos produciría un error si queremos realizar alguna operación aritmética con este valor.

#### *Objeto Math()*
- Math.PI --> nos devuelve el numero de PI(3,14...)
- Math.random() --> Retorna un pto flotante, un numero pseudoaleatorio dentro del rango[0,1).
- Math.round() --> Retorna el valor de un numero redondeado al entero mas cercano.
- Math.max() --> Devuelve el mayor de cero o mas numeros. 

#### *Bucles especificos*
- ``for ... in ...`` --> for(var variedad in objeto)
- ``for... of...`` --> for(var variable of elemtneo iterable)

#### *JavaScript nos permite interactuar con el front-end del usuario siempre y cuando se haga una petición al servidor.*
Falso

#### *¿Qué es el DOM?*
La representación en objetos que hace JavaScript del documento HTML.

#### *El objeto window representa la ventana donde estamos navegando.*
Verdadero

#### *Mediante el objeto document podemos...*
Leer todos los elementos del HTML y modificarlos, si así lo quisiéramos.

<img src="./img-teoria/img_dom.png" alt="Imagen del Dom">

#### *Selectores*
- `document.getElementById();` // el id es algo unico de cada elemento</br>
- `document.getElementsByClassName();` //devuelve un array de los elementos con la clase indicada </br>
- `document.getElementsByTagName("p");` //devuelve un array de todos los elementos con el tagname indicado </br>
- `document.querySelector("p");`// mas general puedo buscar cualquier cosa, depende de como lo escribo en los parametros, devuelve el primer elemento encontrado </br>
- `document.querySelectorAll("p"); `//devuelve un array con todos los elementos

#### *SelectoresDOM*
- `querySelector()`
```js
    let titulo = document.querySelecto('.title');
```
- `querSelectorAll()`
```js
    let nombres = document.querySelectorAll('.name');
```
- `getElementById()`
```js
    let marca = document.getElementById('marca');
```
comparando selectores:</br>
| querySelector()| querySelectorAll()| getElementById()|   
|----------------|-------------------|-----------------|
| Retorna el primer elemento del DOM que cumplecon la condicion que buscamos. | Retorna todos los elementos del DOM que cumplen con la condicion que buscamos. | Retorna el elemento del DOM que cumpla con el id que buscamos. |

#### *Modificaciones del DOM*
`document.querySelector()` es uno de los selectores que permite elegir que elemento se quiere modificar del DOM. </br>
La propiedad `.innerHTML` al ser utilizada para escritura reemplaza completamente lo que ya estaba, con el operando `+=` se agrega el contenido al que ya estaba. </br>
Con la propiedad `innerText` sirve para leer o modificar el texto de una etiqueta HTML.</br>
```js
    document.querySelector('div.nombre').innerText; //--> retorna lo que este escrito en ese elemento. 
    document.querySelector('div.nombre').innerText = 'Lara'; //--> reemplaza lo que estaba escrito por Lara, en este caso. 
    document.querySelector('div.nombre').innerText += 'Messi'; //--> agrega el Messi 
```

#### *Sintaxis correcta de un template string*
```"Mi variable vale ${miVariable}"``` --> se abre con las comillas invertidas`</br>
Ejemplo mas claro 
```js
const miNombre = "Lara";
const miTemplate = `mi nombre es ${miNombre}`;
console.log(miTemplate);
```

#### *Modificando clases con classList...*
| .add()                       | .remove()                      | .toggle()                                              | .contains()                                                            |
|------------------------------|--------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| Agrega la clase  al elemento | Elimina la clase  del elemento | Agrega la clase en caso de no tenerla, sino la elimina | Pregunta si un elemento tiene la clase o no Retorna un valor booleano. |

</br>

#### *Creacion de nodos elemento*
`document.createElement("input");`

#### *Creacion de nodo texto*
`document.createTextNode("HOLIS");`

#### *Adherir un elemento hijo al DOM*
`document.body.appendChild(titulo);`

#### *Marcá la opción que describa correctamente el método createNodeText().*
createNodeText() = Podría ser una cadena de texto vacía, lleva comillas y no se visualiza hasta asignarlo a un elemento.


#### *appendChild solo asignará el elemento hijo si creamos antes el elemento padre con createElement.*
FALSO.

#### *El siguiente ejercicio da como resultado: un <p> con el texto “Buenos dias” dentro de un div*
```html
<script>
var p = document.createElement("P")
var texT = document.createTextNode("Buenos Dias");
p.appendChild(texT);
var diV = document.querySelector("div").appendChild(p);
document.body.appendChild(diV)
</script> 
```
VERDADERO

#### *Atributos dinamicos*
--> Etiqueta <img>
- alt
- src
- width
--> Etiqueta <a>
- href
- target
--> Etiqueta <meta>
- charset
- name

#### *Metodos de atributos* 
`hasAtributte()` --> evalua si contiene el atributo (retorna boolean)
`getAttribute()` --> revortna el elemento si existe o null si no
`removeAttribute()`--> elimina el atributo
`setAttribute()` --> agrega un atributo 

#### *Eventos*


## TIPO FINAL

#### *Como funciona el Math.Random()?*
Ejemplo: ``` let numeroRand = Math.random()*3+1``` seleccionaria un numero entre el 1, 2 o 3.

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