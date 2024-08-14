const readlineSync = require('readline-sync');

let numero = readlineSync.question("Ingresa un número: ");
numero = parseInt(numero); // Asegúrate de convertir la entrada a un número

if (numero % 2 === 0) {
    console.log(`${numero} es divisible entre 2`);
} else {
    console.log(`${numero} no es divisible entre 2`);
}