const readlineSync = require('readline-sync');

let numero1 = readlineSync.question("Ingresa el primer número: ");
let numero2 = readlineSync.question("Ingresa el segundo número: ");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 < numero2) {
    console.log(`El número menor es: ${numero1}`);
} else {
    console.log(`El número menor es: ${numero2}`);
}