 /***** manipulando el dom con selectores  */

 /**getElementbyID  y querySelector  solo retornan un elemento*/

/*  ->getElementbyID  */

//#region 
/*let encabezado;

encabezado = document.getElementById('encabezado');
encabezado = document.getElementById('encabezado').id;
encabezado = document.getElementById('encabezado').className;
// me retorna el valor dentro de la etiqueda html
encabezado = document.getElementById('encabezado').textContent;
// de esta forma tambien retorna el contenido de la etiqueta
encabezado = document.getElementById('encabezado').innerText;

encabezado = document.getElementById('encabezado');

// dando valores de estilos desde javascrip
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores Cursos';
encabezado.innerText = 'Los mejores Cursos...';
console.log(encabezado);
*/
//#endregion



/* ->querySelector* este selector solo va a retornar solo un elemento */

/** La ventaja del query sellector es que puedo seleccionar tanto por id como por clase, como tambien puedes utilizar el selector de etiqueta cuando son clase solo trae al primero elemento que consiga con esa clase*/

//#region
/*
let encabezado = document.querySelector('#encabezado');
 encabezado = document.querySelector('.encabezado');
 encabezado = document.querySelector('h1');
 encabezado = document.querySelector('.card img');
 encabezado = document.querySelector('#principal a:nth-child(3)');
 

console.log(encabezado);
*/
//#endregion




/* ->getElementsByClassName me retorna todos los nodos que tendas el nombre de clase enlace*/

//#region 

//  obtiene solo el elemento de el indice 3 o pocision 3
let enlaces = document.getElementsByClassName('enlace')[3];
// obtiene todos los elementos con la clase enlace 
 enlaces = document.getElementsByClassName('enlace');

//enlaces.style.background= '#333';

//enlaces = enlaces[3];
//console.log(enlaces);


/** se pueden mexclar tambien asi   */
/*
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces);*/

//#endregion


/* -> getElementsByTagName   */


//#region 
/*const link = document.getElementsByTagName('a');

//link[18].style.color= 'red';
//link[18].textContent= 'Nuevo enlace';

let arreglo = Array.from(link);

arreglo.forEach(function(elemento) {
    console.log(elemento.textContent);
});
*/


//console.log(link);*/
//#endregion


/*  querySelectorAll  este retorma varios elementos  */

let link = document.querySelectorAll('#principal .enlace');
//console.log(link);
link = document.querySelectorAll('#principal a:nth-child(odd)');

link.forEach(function(en){
    console.log(en.textContent);
})


