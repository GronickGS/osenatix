// Agrega un evento que se ejecutará cada vez que se haga scroll en la ventana.
window.addEventListener("scroll", function() {
    // Obtiene el elemento con el ID "volverArriba".
    var boton = document.getElementById("volverArriba");
    // Verifica si el desplazamiento vertical de la ventana es mayor que 100 píxeles.
    if (window.pageYOffset > 100) {
        // Si es mayor que 100 píxeles, agrega la clase "show" al botón.
        boton.classList.add("show");
    } else {
        // Si es menor o igual a 100 píxeles, remueve la clase "show" del botón.
        boton.classList.remove("show");
    }
});

// Agrega un evento al botón con el ID "volverArriba" que se ejecutará cuando se haga clic en él.
document.getElementById("volverArriba").addEventListener("click", function() {
    // Desplaza la ventana suavemente hasta la parte superior (posición 0) de la página.
    window.scrollTo({ top: 0, behavior: "smooth" });
});
