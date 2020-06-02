/** ->traversing de padres a hijo  */
//#region 

const navegacion= document.querySelector('#principal');

//console.log(navegacion.childNodes);  //regresa los nodos con contenido adicional

// regresa el nombre del nodo
//console.log(navegacion.nodeName);

//regresa los nodos hijos limpios se recomienda este
//console.log(navegacion.nodeName);


//regresa los tipos de nodo en numero
//console.log(navegacion.children[0].nodeType);


/*1 = elementos html
2= atributos
3 =text node
8=comentarios
9=documentos
10= doctype*/

//');


let barra = document.querySelector('.barra');
//console.log(barra.children[0].children[0].children)
//console.log(barra.children[0].children[0].children)

let cursos = document.querySelectorAll('.card');
//accediendo a los elementos hijos de cursoss
//console.log(cursos[0].lastElementChild);
//console.log(cursos[0].firstElementChild);
// se usa para saber cuantos elementos hijo tiene
//console.log(cursos[0].childElementCount);

//#endregion



/** accediento de hijos a padres *
 * 
 * */

//#region 
 const enlaces = document.querySelectorAll('.enlace');
 //me devuelve el nodo padre
 /*console.log(enlaces[0].parentElement);
 console.log(enlaces[0].parentNode);
 */
 //tambien se puede ir mas arriba de los elementos padre como te lo permita el dom
 /*console.log(enlaces[0].parentElement.parentElement);
*/
 const entrenamiento = document.querySelectorAll('.card');
 //console.log(cursos[0].parentElement.parentElement.parentElement);



 /*** otra forma de acceder */

 const sib =document.querySelectorAll('.enlace');

 //te permite selecccionar el hermano anterior a el
 //console.log(sib[4].previousElementSibling);
 // te permite seleccionar el hermano siguiente
 //console.log(sib[0].nextElementSibling);

 //#endregion
