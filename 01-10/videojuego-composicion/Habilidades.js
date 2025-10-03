// Ejemplos de composición: módulos que añaden comportamientos

export const puedeCurarse = (personaje) => ({
  curar: () => {
    personaje.vida += 10;
    console.log(`${personaje.nombre} se cura y ahora tiene ${personaje.vida} de vida`);
  }
});

export const puedeDisparar = (personaje, enemigo) => ({
  disparar: (enemigo) => {
    console.log(`${personaje.nombre} dispara un proyectil!`);
    if (enemigo != null) {
      console.log(`y ${enemigo.nombre} ha sido alcanzado!`);
      enemigo.vida -= 10;
    }
  }
       
});

export const puedeSaltar = (personaje) => ({
  saltar: () => {
    console.log(`${personaje.nombre} salta hacia arriba`);
  }
});
