// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');

    var miBoton = document.getElementById('miBoton');
    miBoton.addEventListener('click', function() {
        // Obtener los valores de los inputs
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var edad = document.getElementById('edad').value;

        // Mostrar los valores en la consola
        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Edad:', edad);

        // Aquí puedes agregar lógica adicional, como enviar los datos a un servidor, etc.
    });
});
