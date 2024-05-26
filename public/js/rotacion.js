// Función para verificar si un elemento está completamente visible en la ventana
function isVisible(element) {
    // Obtiene el rectángulo que representa las dimensiones y la posición del elemento en la ventana.
    const rect = element.getBoundingClientRect();
    // Verifica si todas las esquinas del rectángulo están dentro de las dimensiones de la ventana.
    return (
      rect.top >= 0 && // La parte superior del rectángulo está dentro de la ventana.
      rect.left >= 0 && // La parte izquierda del rectángulo está dentro de la ventana.
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // La parte inferior del rectángulo está dentro de la altura de la ventana.
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) // La parte derecha del rectángulo está dentro del ancho de la ventana.
    );
  }
  
  // Función para mostrar las imágenes cuando sean visibles
  function showImages() {
    // Selecciona todos los elementos con la clase 'activity'.
    const images = document.querySelectorAll(".activity");
    // Itera sobre cada imagen seleccionada.
    images.forEach((image) => {
      // Verifica si la imagen es visible en la ventana.
      if (isVisible(image)) {
        // Si la imagen es visible, cambia su opacidad a 1 (haciéndola completamente visible).
        image.style.opacity = "1";
      }
    });
  }
  
  // Muestra las imágenes cuando se carga la página
  document.addEventListener("DOMContentLoaded", showImages);
  // Muestra las imágenes cuando se desplaza la ventana
  window.addEventListener("scroll", showImages);
  