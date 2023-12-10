const fs = require('fs');
const { register, read } = require('./operaciones');

const infoPaciente = process.argv.slice(2);
const operacion = infoPaciente[0];

if (operacion === "registrar") {
    if (infoPaciente.length < 6) {
        console.log("Debe ingresar nombre mascota, edad, tipo de animal, color y enfermedad para registrar.");
    } else {
        register(infoPaciente);
    }
} else if (operacion === "leer") {
    read();
} else {
    console.log("Debe indicar como función 'registrar' o 'leer'.");
};
