const readlineSync = require('readline-sync');

let dia = readlineSync.question("Ingresa un día de la semana: ");
dia = dia.toLowerCase();

if (dia === "lunes") {
    console.log("¡Ánimo, es lunes!");
} else if (dia === "viernes") {
    console.log("¡Es viernes, el cuerpo lo sabe!");
} else if (dia === "sábado" || dia === "domingo") {
    console.log("¡Es fin de semana, a descansar!");
} else {
    console.log("Es un día normal.");
}