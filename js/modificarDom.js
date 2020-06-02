
/** creando elementos desde el javascrip */

//#region 

const enlace = document.createElement('a');
//agregamos una clase
enlace.className ='enlace';
//anadiendo un id
enlace.id= 'nuevo-id'
//anadiendo atributos
enlace.setAttribute('href','#');
//anadir texto
enlace.textContent = 'Nuevo enlace';
//enlace.appendChild(document.createTextNode)
//agregarlo al html

document.querySelector('#secundaria').appendChild(enlace);
//console.log(enlace);

//#endregion

/** reemplazando elementos con javascript */

//#region 
const nuevoEncabezado = document.createElement('h2');
//agregar id
nuevoEncabezado.id='encabezado';

nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// elementos que sera reemplazado
const anterior = document.querySelector('#encabezado');

//elemento padre
const ePadre = document.querySelector('#lista-cursos');

// reemplazar
ePadre.replaceChild(nuevoEncabezado, anterior);

//console.log(anterior);

//#endregion



/** Quitando elementos del dom */
/*
let enlaces = document.querySelectorAll('.enlace');

// primera forma
enlaces[0].remove();
enlaces = document.querySelectorAll('.enlace');
console.log(enlaces);

// segunda forma
const navegacion = document.querySelector('#principal');

console.log(navegacion);
navegacion.removeChild(enlaces[0]);

*/
// 

const primerLi =document.querySelector('.enlace');
let elemento;

//obtener una clase del css
elemento = primerLi.className;
elemento= primerLi.classList.add('nueva-clase');
elemento= primerLi.classList.remove('nueva-clase');

//este obtiene la lista de clases
elemento = primerLi.classList;

console.log(elemento);


// leyendo atributos
elemento = primerLi.getAttribute('href');
// setiando atributos
primerLi.setAttribute('href', 'http://colors.io');

//creando atributos
primerLi.setAttribute('data-id',20);

//comprobando si existe un atributo returna booleado true o false
elemento =primerLi.hasAttribute('data-id')  

// removiendo un atributo
primerLi.removeAttribute('data-id');
elemento= primerLi;

console.log(elemento);