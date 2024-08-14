const readlineSync = require('readline-sync');

let calificacion = readlineSync.question("Ingresa tu calificación (entre 1 y 10): ");
calificacion = parseInt(calificacion);

if (calificacion < 1 || calificacion > 10) {
    console.log("Error: La calificación debe estar entre 1 y 10.");
} else if (calificacion < 6) {
    console.log("Reprobado");
} else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
} else if (calificacion === 9) {
    console.log("Bien");
} else {
    console.log("Excelente");
}