const readlineSync = require('readline-sync');

let numero = readlineSync.question("Ingresa un número: ");
numero = parseInt(numero);

if (numero % 2 === 0) {
    console.log(`${numero} es par`);
} else {
    console.log(`${numero} es impar`);
}