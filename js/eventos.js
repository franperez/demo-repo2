// event listnter click

//#region 

/*
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);
 
    function ejecutarBoton(e) {
        e.preventDefault();  
        //alert('DEsde la funcion ejecutar boton');
        console.log('DEsde la funcion ejecutar boton');    
        let elemento;
        elemento = e.target;
        elemento = e.target.id;
        elemento = e.target.className;
        elemento = e.target.innerText;
        console.log(elemento);
        
    }

    document.querySelector('#encabezado').addEventListener('click', function(e) {
        e.target.innerText= 'Nuevo Encabezado';
        console.log(e.target.innerText);
    });
    */

//#endregion

// distintos eventos con el mouse

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');

const boton = document.querySelector('#vaciar-carrito');

//#region 
// --> click

//boton.addEventListener('click', obtenerEvento);

//  -->doble clic
//boton.addEventListener('dblclick', obtenerEvento);

// --> mouse enter
//boton.addEventListener('mouseenter', obtenerEvento);

//-->mouse leave
//boton.addEventListener('mouseleave', obtenerEvento);

// --> mouse over
//boton.addEventListener('mouseover', obtenerEvento);

//-> mouseuot
//boton.addEventListener('mouseout', obtenerEvento);

// -> mouse down
//boton.addEventListener('mousedown', obtenerEvento);

// -> mouse up
//boton.addEventListener('mouseup', obtenerEvento);

// -> mouse move
//boton.addEventListener('mousemove', obtenerEvento);






  //#endregion  


  /** --> eventos para inputs */

//#region 
  const busqueda = document.querySelector('#buscador');

  //busqueda.addEventListener('keydown', obtenerEvento);

  //busqueda.addEventListener('keyup', obtenerEvento);

  //busqueda.addEventListener('keypress', obtenerEvento);
  //busqueda.addEventListener('focus', obtenerEvento);

  //busqueda.addEventListener('blur', obtenerEvento);

  // evento de cortar
  //busqueda.addEventListener('cut', obtenerEvento);

  // copiar
  //busqueda.addEventListener('copy', obtenerEvento);

   // paste
  //busqueda.addEventListener('paste', obtenerEvento); 

  // input este identifica todos los eventos anteriores
  //busqueda.addEventListener('input', obtenerEvento);

 // change se usa para los select
  //busqueda.addEventListener('change', obtenerEvento);


  function obtenerEvento(e){
    //document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`Evento :  ${e.type}`)

}
//#endregion

/** ---> event bublig */
    //#region 
    /*
    const card = document.querySelector('.card');
    const infoCurso =  document.querySelector('.info-card');
    const agregarCarrito = document.querySelector('.agregar-carrito');


    card.addEventListener('click', function(e){
        console.log('Click en card');
        e.stopPropagation();
        
    })

    infoCurso.addEventListener('click', function(e){
        console.log('Click en  info curso');
        e.stopPropagation();
        
    })

    agregarCarrito.addEventListener('click', function(e){
        console.log('Click en agregar carrito');
        e.stopPropagation();
        
    })
*/

//#endregion


/**  --> delegation */

document.body.addEventListener('click', eliminarElemento);


function eliminarElemento(e){
    e.preventDefault();
    //console.log('Clicl!')
    //console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
      e.target.parentElement.parentElement.remove();
    }

    if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado');
    }
}


