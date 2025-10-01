export class Objeto{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo; // Ejemplos de tipos: 'arma', 'pocion', 'armadura'
    }

    usar(personaje){
        if(this.tipo === 'pocion'){
            console.log(`${personaje.nombre} usa una ${this.nombre} y recupera 20 de vida.`);
            personaje.vida += 20;
            if(personaje.vida > 100) personaje.vida = 100; // Vida máxima
        }else if(this.tipo === 'arma'){
            console.log(`${personaje.nombre} equipa un ${this.nombre}.`);
        }
    }
}