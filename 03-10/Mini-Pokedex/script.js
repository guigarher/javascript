const pokedex = document.getElementById("pokedex");
const boton = document.getElementById("mostrar");
const input = document.getElementById("cantidad");

// La función que obtiene los datos de un Pokémon
async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

// Función que limpia el pokedex y pinta X pokémon
async function mostrarPokemones(cantidad) {
  pokedex.innerHTML = ""; // limpia lo anterior
  for (let i = 1; i <= cantidad; i++) {
    const pokemon = await getPokemon(i);
    const div = document.createElement("div");
    div.classList.add("pokemon");

    const tipo = pokemon.types[0].type.name;
    div.classList.add(tipo);

    div.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <div class="info">
        <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
      </div>
    `;
    pokedex.appendChild(div);
  }
}

// Cuando se haga clic, leer el número e iniciar la carga
boton.addEventListener("click", () => {
  const cantidad = Number(input.value);
  if (cantidad > 0 && cantidad <= 151) {
    mostrarPokemones(cantidad);
  } else {
    alert("Introduce un número entre 1 y 151");
  }
});
