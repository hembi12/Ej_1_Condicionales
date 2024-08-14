const readlineSync = require('readline-sync');

let topping = readlineSync.question("¿Qué topping deseas para tu helado? (Oreo, KitKat, Brownie): ").toLowerCase();
let costoBase = 50;
let costoTotal;

if (topping === "oreo") {
    costoTotal = costoBase + 10;
} else if (topping === "kitkat") {
    costoTotal = costoBase + 15;
} else if (topping === "brownie") {
    costoTotal = costoBase + 20;
} else {
    console.log("No tenemos este topping, lo sentimos.");
    costoTotal = costoBase;
}

console.log(`El precio total del helado es: ${costoTotal} MXN`);