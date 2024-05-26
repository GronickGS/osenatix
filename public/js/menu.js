// Función autoejecutable para crear un ámbito privado y evitar conflictos con otras variables o funciones.
(function(){
    // Selecciona el primer elemento del DOM con la clase 'nav__menu' y lo guarda en la variable 'btnAbrir'.
    const btnAbrir = document.querySelector('.nav__menu');
    // Selecciona el primer elemento del DOM con la clase 'nav__link' y lo guarda en la variable 'menu'.
    const menu = document.querySelector('.nav__link');
    // Selecciona el primer elemento del DOM con la clase 'nav__close' y lo guarda en la variable 'abrirMenu'.
    const abrirMenu = document.querySelector('.nav__close');

    // Agrega un evento de clic al botón 'btnAbrir' para mostrar el menú.
    btnAbrir.addEventListener('click', ()=>{
        // Agrega la clase 'nav__link--show' al elemento 'menu', lo cual probablemente hace visible el menú.
        menu.classList.add('nav__link--show');
    });

    // Agrega un evento de clic al botón 'abrirMenu' para ocultar el menú.
    abrirMenu.addEventListener('click', ()=>{
        // Remueve la clase 'nav__link--show' del elemento 'menu', lo cual probablemente oculta el menú.
        menu.classList.remove('nav__link--show'); 
    });
})();
