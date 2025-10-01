// Importamos las clases
import { Personaje } from './personaje.js';
import { Enemigo } from './enemigo.js';
import { Objeto } from './objeto.js';

const jugador = new Personaje('Heroe', 100, 20);
const enemigo = new Enemigo('Goblin', 50, 10);
const pocion = new Objeto('Poción de Vida', 'cura 20 puntos de vida');
const espada = new Objeto('Espada Corta', 'arma');

// Simulación de acciones
console.log('--- Inicio del Juego ---');
jugador.recoger(pocion);
jugador.recoger(espada);

jugador.mostrarEstado();
enemigo.mostrarEstado();

jugador.atacar(enemigo);
enemigo.atacar(jugador);

pocion.usar(jugador);

jugador.mostrarEstado();
enemigo.mostrarEstado();
console.log('--- Fin del Juego ---');