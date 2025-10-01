// Esto representa al jugador de nuestro juego

export class Personaje {
    constructor(nombre, vida = 100) {
        this.nombre = nombre;
        this.vida = vida;
        this.inventario = [];
    }

    // Método para que el personaje pueda atacar a un enemigo
    atacar(enemigo){
        console.log(`${this.nombre} ataca a ${enemigo.nombre}`);
        enemigo.vida -= 10;
    }

    recoger(objeto) {
        console.log(`${this.nombre} recoge un ${objeto.nombre}`);
        this.inventario.push(objeto);
    }

    mostrarEstado() {
        console.log(`${this.nombre} -> Vida: ${this.vida} Inventario: ${this.inventario.map(obj => obj.nombre).join(', ')}`);
    }

}