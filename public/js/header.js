// Agrega un evento que se ejecutará cuando el contenido del DOM se haya cargado completamente.
document.addEventListener('DOMContentLoaded', (event) => {
    // Define un array con las rutas de las imágenes que se usarán en el carrusel.
    const images = [
        './images/hero.jpg', 
        './images/alumnos/grupo.jpg', 
        './images/fsociety.jpg'
    ];
    
    // Inicializa el índice de la imagen actual en 0.
    let currentIndex = 0;
    
    // Obtiene el elemento del DOM con el ID 'hero' y lo guarda en la variable 'heroElement'.
    const heroElement = document.getElementById('hero');

    // Define una función para cambiar la imagen de fondo del elemento 'heroElement'.
    function changeImage() {
        // Incrementa el índice de la imagen actual y lo ajusta para que sea un ciclo (vuelve a 0 cuando llega al final del array).
        currentIndex = (currentIndex + 1) % images.length;
        // Cambia la imagen de fondo del elemento 'heroElement' aplicando un gradiente lineal y la nueva imagen del array.
        heroElement.style.backgroundImage = `linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url('${images[currentIndex]}')`;
    }

    // Establece un intervalo para ejecutar la función 'changeImage' cada 3 segundos (3000 milisegundos).
    setInterval(changeImage, 3000);
});
