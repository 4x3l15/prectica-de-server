// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Código que se ejecuta cuando el DOM ha sido completamente cargado
    console.log('DOM cargado');

    // Agregar un evento al botón
    var miBoton = document.getElementById('miBoton');
    miBoton.addEventListener('click', function() {
        alert('¡Botón clicado!');
    });
});
