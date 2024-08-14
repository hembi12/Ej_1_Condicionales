const readlineSync = require('readline-sync');

let numeroCliente = readlineSync.question("Ingresa tu número de cliente: ");
numeroCliente = parseInt(numeroCliente);

if (numeroCliente === 1000) {
    console.log("¡Ganaste un premio!");
} else {
    console.log(`Número: ${numeroCliente}. Lo sentimos, sigue participando.`);
}