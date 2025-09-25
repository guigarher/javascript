//Operador de asignación

let edad = 30; // Asignación de valor a la variable edad

let elemento = document.querySelector("body"); // Asignación del elemento body a la variable elemento

let numero=10
numero *=10 // Equivalente a numero = numero * 10
console.log(numero) // Muestra 100

function dibujarCapa(valor) {
    elemento.innerHTML += `<div>${valor}</div>`;
}
numero++; // Incrementa numero en 1
dibujarCapa(numero);

//Operadores de comparación

let mayor = edad > 18; // true si edad es mayor que 18
let menor = edad < 18; // true si edad es menor que 18
let mayorIgual = edad >= 18; // true si edad es mayor o igual que 18
let menorIgual = edad <= 18; // true si edad es menor o igual que 18
let igual = edad == 18; // true si edad es igual a 18 (solo valor)
let igualEstrictamente = edad === 18; // true si edad es igual a 18 (valor y tipo)
let distinto = edad != 18; // true si edad es distinto de 18 (solo valor)
let distintoEstrictamente = edad !== 18; // true si edad es distinto de 18 (valor y tipo)

//operadores lógicos

let adulto = edad >= 18 && edad < 65; // true si edad está entre 18 y 64 (inclusive)
let esJubilado = edad >= 65 || edad < 18; // true si edad es menor de 18 o mayor o igual a 65       

//operador ternario

let mensaje = adulto ? "Es un adulto" : "No es un adulto";
console.log(mensaje); // Muestra "Es un adulto" si adulto es true, o "No es un adulto" si adulto es false

//operador typeof

console.log(typeof edad); // Muestra "number"

