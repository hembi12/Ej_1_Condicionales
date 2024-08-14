const readlineSync = require('readline-sync');

let respuesta = readlineSync.question("¿Eres bellisimo/a? ");
if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
    console.log("Ciertamente");
} else {
    console.log("No te creo");
}