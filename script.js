document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');


const miBoton = document.getElementById('miBoton');
    miBoton.addEventListener('click', function() {
        alert('¡Botón clicado!');
    });
});
