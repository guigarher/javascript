const pokedex = document.getElementById("pokedex");

async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
}

console.log(getPokemon(1)); // Promise
getPokemon(1).then(pokemon => console.log(pokemon));

for (let i = 1; i <= 9; i++) {
  getPokemon(i).then(pokemon => {
    let div = document.createElement("div");
    div.classList.add("pokemon");

    let tipo = pokemon.types[0].type.name; 
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
    pokedex.appendChild(div); // 👉 en el contenedor
  });
}
