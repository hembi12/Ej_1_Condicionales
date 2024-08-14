const readlineSync = require('readline-sync');

let num1 = readlineSync.question("Ingresa el primer número: ");
let num2 = readlineSync.question("Ingresa el segundo número: ");
let num3 = readlineSync.question("Ingresa el tercer número: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (num1 >= num2 && num1 >= num3) {
    console.log(`El número mayor es: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`El número mayor es: ${num2}`);
} else {
    console.log(`El número mayor es: ${num3}`);
}