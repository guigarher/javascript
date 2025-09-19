var nombre = "Juan"; //Esto lo evitaremos
let apellido = "Perez"; //Esto es lo correcto
const edad = 30; //Esto es una constante, no puede cambiar

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Edad: " + edad);   

function saludar() {
    let saludo = "Hola, " + nombre + " " + apellido;
    console.log(saludo);
}
saludar();

//en javaScript se usa camelCase para nombrar variables

let estado = "confirmado";
let estadoActual = "pendiente";

// las variables pueden empezar con _ o $ pero no es recomendable
let _nombre = "Ana";
let $apellido = "Gomez";

//tipos de variables
let numero = 100;
let decimal = 99.99;
let texto = "Esto es un texto";
let booleano = false;
let nulo = null;
let indefinido; //undefined
let nombres = ["Juan", "Ana", "Luis"]; //array
console.log(nombres[1]);
let arrayRandom = [1, "texto", true, null, undefined, [1,2,3]]; //array con diferentes tipos
console.log(arrayRandom[5][1]);
let persona = {nombre: "Carlos", edad: 28}; //objeto

let a = 200;
let b = '200';
let resultado=(a/b);
console.log("Resultado: "+resultado);
console.log(typeof(resultado)); //number

let edad1 = 35; //number
let añoactual = new Date().getFullYear(); 
let añoNacimiento = añoactual - edad1; //operacion
let nombre1 = "Guillermo";
let nombre2 = 'Guillermo';
let nombre3 = `Guillermo`; //template string
let saludo = `Hola, ${nombre1} tienes ${edad1} años y naciste en ${añoNacimiento}`; //template string con variable
console.log(saludo);