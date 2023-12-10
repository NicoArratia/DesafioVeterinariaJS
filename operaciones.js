const fs = require('fs');

/**
 * Registra informacion de la mascota in citas.json

 * @param {string[]} infoPaciente - Array que contiene la informacion de la mascota
 */

const register = (infoPaciente) => {
    const datos = JSON.parse(fs.readFileSync("citas.json", "UTF8"));
    const plantillaPaciente = {
        "Nombre Mascota": infoPaciente[1],
        "Edad": infoPaciente[2],
        "Tipo de animal": infoPaciente[3],
        "Color": infoPaciente[4],
        "Enfermedad": infoPaciente[5]
    };
    datos.push(plantillaPaciente);
    fs.writeFileSync("citas.json", JSON.stringify(datos));
};

/**
 * lee y muestra la informacion en citas
 */

const read = () => {
    const datos = JSON.parse(fs.readFileSync("citas.json", "UTF8"));
    datos.forEach(cita => console.log(cita));
};

module.exports = { register, read };
