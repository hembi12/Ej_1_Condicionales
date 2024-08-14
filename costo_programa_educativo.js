const readlineSync = require('readline-sync');

let programa = readlineSync.question("¿Qué programa deseas? (Course, Carrera, Master): ").toLowerCase();
let beca = readlineSync.question("¿Tienes alguna beca? (Facebook, Google, Jesua, Ninguna): ").toLowerCase();
let costoMensual;
let duracion;
let descuento;

if (programa === "course") {
    costoMensual = 4999;
    duracion = 2;
} else if (programa === "carrera") {
    costoMensual = 3999;
    duracion = 6;
} else if (programa === "master") {
    costoMensual = 2999;
    duracion = 12;
} else {
    console.log("Programa no reconocido.");
    costoMensual = 0;
    duracion = 0;
}

if (beca === "facebook") {
    descuento = 0.2;
} else if (beca === "google") {
    descuento = 0.15;
} else if (beca === "jesua") {
    descuento = 0.5;
} else {
    descuento = 0;
}

let costoConDescuento = costoMensual - (costoMensual * descuento);
let costoTotal = costoConDescuento * duracion;

console.log(`El costo mensual con descuento es: ${costoConDescuento} MXN. El costo total del programa es: ${costoTotal} MXN`);