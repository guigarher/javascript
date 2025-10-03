import { Jugador } from "./Jugador.js";
import { Enemigo, JefeFinal } from "./Enemigo.js";
import { puedeCurarse, puedeDisparar, puedeSaltar } from "./Habilidades.js";

// Herencia
const link = new Jugador("Luigi", 100, 1);
const goblin = new Enemigo("Koopa", 50, "orco");

link.atacar(goblin);
link.subirNivel();

// Composición
function crearJugadorConHabilidades(nombre) {
  let base = { nombre, vida: 100 };
  return {
    ...base,
    ...puedeCurarse(base),
    ...puedeDisparar(base),
    ...puedeSaltar(base),
  };
}

const mario = crearJugadorConHabilidades("Mario");

let jefeFinal = new JefeFinal("SuperKoopa",100, "Super Rayo Mortal")
// LE PASA ALGO A 
let superJefeFinal = {...jefeFinal}
Object.assign(superJefeFinal, puedeCurarse(superJefeFinal));
//superJefeFinal = {...superJefeFinal, ...puedeCurarse(superJefeFinal)}



/*

OPCION 1
let superJefeFinal = {...jefeFinal}
Object.assign(superJefeFinal, puedeCurarse(superJefeFinal));

superJefeFinal = {...jefeFinal} esto hace una copia superficial del jefeFinal.

Object.assign(...) copia las propiedades directamente sobre ese mismo objeto (mutación).

Resultado: superJefeFinal es un único objeto, que mantiene las referencias correctas a curar.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

OPCION 2
let superJefeFinal = {...jefeFinal};
superJefeFinal = {...superJefeFinal, ...puedeCurarse(superJefeFinal)};
Aquí pasan dos cosas importantes:

1) La primera línea crea un clon del jefeFinal.

) La segunda línea crea un nuevo objeto completamente nuevo con:

todas las propiedades del clon anterior (...superJefeFinal)

más las de puedeCurarse(superJefeFinal)

El detalle es que cuando llamas puedeCurarse(superJefeFinal), esa función captura la referencia del objeto de la primera línea, no del nuevo que estás creando en la segunda.
Entonces curar termina actuando sobre un objeto que ya no usas más (el intermedio).

*/




mario.curar();
mario.disparar(superJefeFinal);

superJefeFinal.curar();


mario.saltar();
