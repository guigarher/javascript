export class Enemigo {
    constructor(nombre, vida = 50, dano = 5) {
        this.nombre = nombre;
        this.vida = vida;
        this.dano = dano;
    }
    atacar(personaje) {
        console.log(`${this.nombre} ataca a ${personaje.nombre}`);
        personaje.vida -= this.dano;
    }
    mostrarEstado() {
        console.log(`${this.nombre} -> Vida: ${this.vida}`);
    }
}