// Función autoejecutable para crear un ámbito privado y evitar conflictos con otras variables o funciones.
(function(){
    // Selecciona todos los elementos con la clase 'conten_des__title' y los convierte en un array.
    const titulo_des = [...document.querySelectorAll('.conten_des__title')];
    // Imprime el array de elementos seleccionados en la consola para verificar su contenido.
    console.log(titulo_des);

    // Itera sobre cada elemento del array 'titulo_des'.
    titulo_des.forEach(desplegar =>{
        // Agrega un evento de clic a cada elemento 'desplegar'.
        desplegar.addEventListener('click', ()=>{
            // Inicializa la variable 'alto' a 0, para determinar la altura del contenido desplegable.
            let alto = 0;
            // Obtiene el siguiente hermano del elemento 'desplegar', que será el contenido a mostrar/ocultar.
            let respuesta = desplegar.nextElementSibling;
            // Obtiene el elemento padre del padre del 'desplegar', para modificar su padding.
            let addPadding = desplegar.parentElement.parentElement;

            // Alterna la clase 'conten_des__padding--add' en el elemento 'addPadding', para ajustar el padding.
            addPadding.classList.toggle('conten_des__padding--add');
            // Alterna la clase 'conten_des__arrow--rotate' en el primer hijo del elemento 'desplegar', para rotar la flecha.
            desplegar.children[0].classList.toggle('conten_des__arrow--rotate');

            // Si la altura actual del contenido 'respuesta' es 0 (está oculto), se establece 'alto' con la altura completa del contenido.
            if(respuesta.clientHeight === 0){
                alto = respuesta.scrollHeight;
            }

            // Establece la altura del contenido 'respuesta' a la variable 'alto' (mostrándolo o ocultándolo).
            respuesta.style.height = `${alto}px`;
        });
    });
})();


// =: asignacion
// == ó ===: comparacion 