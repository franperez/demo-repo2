// Eliminar de Local Storage
//localStorage.clear();


// obteniendo informacion del dom  y seleccionando elementos del com

let elemento;

elemento = document;  // accediendo a todo el html
elemento = document.all;  // html collection de todo el documento 

elemento = document.all[10]; // accediendo al indice 10 del html collection
elemento = document.head;  // accede al head del html collection
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms; // accede a los formularios
elemento = document.forms[0].className; // accede a las clases del formulario en la posicion 0
elemento = document.forms[0].classList;

elemento = document.images;
elemento = document.images[2].getAttribute('src');

elemento = document.scripts;


elemento = document.images;

let imagenes = document.images;  // convirtiendo  en arreglo un html collections
let imagenesArray = Array.from(imagenes);

    imagenesArray.forEach(function(imagen) {
        console.log(imagen);
    });

console.log(imagenesArray);