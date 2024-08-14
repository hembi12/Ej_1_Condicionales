const readlineSync = require('readline-sync');

let tipoVehiculo = readlineSync.question("¿Qué tipo de vehículo tienes? (coche, moto, autobús): ").toLowerCase();
let kmsRecorridos = parseFloat(readlineSync.question("¿Cuántos kilómetros recorriste?: "));
let litrosConsumidos = parseFloat(readlineSync.question("¿Cuántos litros de combustible consumiste?: "));
let precioKilometro;
let cargoExtra;

if (tipoVehiculo === "coche") {
    precioKilometro = 0.20;
} else if (tipoVehiculo === "moto") {
    precioKilometro = 0.10;
} else if (tipoVehiculo === "autobús") {
    precioKilometro = 0.50;
} else {
    console.log("Tipo de vehículo no reconocido.");
    precioKilometro = 0;
}

if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
    cargoExtra = 5;
} else {
    cargoExtra = 10;
}

let totalPagar = (precioKilometro * kmsRecorridos) + cargoExtra;
console.log(`El total a pagar es: ${totalPagar} MXN`);