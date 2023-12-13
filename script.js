const express = require('express');
const app = express(); // Inicializar la aplicación Express
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb+srv://adramirez:4x3l__15@clusterr.xffnu0h.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conexion exitosa');

        // Iniciar la aplicación Express después de la conexión exitosa
        app.listen(port, () => {
            console.log('El servidor está escuchando en el puerto ' + port);
        });
    })
    .catch((err) => {
        console.error('Error al conectar el servidor: ' + err);
    });

// Código de manipulación del DOM debería ir en archivos HTML y JS separados, no aquí.

// Puedes dejar el bloque de código de manipulación del DOM si estás usando Express para servir archivos estáticos.
app.use(express.static('public'));
