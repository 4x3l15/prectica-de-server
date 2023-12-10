const express = requiere ('express');
const app = ('');
const mongoose = require('mongoose');
const port= 3000

mongoose.connect('mongodb+srv://adramirez:4x3l__15@clusterr.xffnu0h.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('Conexion exitosa')
})
.catch((err) =>{
    console.error('error al conectar el servidor :'+err) 
});

app.listen(port, () => {
    console.log('hola, el servidor anda');
  });

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
