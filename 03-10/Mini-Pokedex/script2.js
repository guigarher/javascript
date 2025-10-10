// --- REFERENCIAS ---
const pokedex = document.getElementById("pokedex");
const boton   = document.getElementById("mostrar");
const input   = document.getElementById("cantidad");

// --- 1) TRAER UN POKÉMON ---
async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status} (id ${id})`);
  return await res.json();
}

// --- 2) TRAER MUCHOS EN PARALELO (1..count) ---
async function fetchPokemons(count) {
  const ids = Array.from({ length: count }, (_, i) => i + 1);
  const promises = ids.map(id => getPokemon(id));
  // Promise.all mantiene el orden del array de entrada
  return await Promise.all(promises);
  // Si quieres tolerar fallos individuales:
  // const settled = await Promise.allSettled(promises);
  // return settled.filter(s => s.status === "fulfilled").map(s => s.value);
}

// --- 3) RENDERIZAR UNA TARJETA (devuelve HTML string) ---
function renderPokemonCard(pokemon) {
  const tipo = pokemon.types[0].type.name; // ej. "fire", "water", ...
  return `
    <div class="pokemon ${tipo}">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <div class="info">
        <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
      </div>
    </div>
  `;
}

// --- 4) RENDERIZAR TODA LA LISTA ---
function renderPokemons(list) {
  pokedex.innerHTML = list.map(renderPokemonCard).join("");
}

// --- 5) CONTROLADOR PRINCIPAL ---
async function loadPokemons(count) {
  pokedex.innerHTML = "<p>Cargando...</p>";
  try {
    const pokemons = await fetchPokemons(count);
    renderPokemons(pokemons);
  } catch (e) {
    console.error(e);
    pokedex.innerHTML = "<p>Hubo un error cargando los datos.</p>";
  }
}

// --- 6) EVENTOS (click y Enter en el input) ---
boton.addEventListener("click", () => {
  const cantidad = Number(input.value);
  if (cantidad > 0 && cantidad <= 151) {
    loadPokemons(cantidad);
  } else {
    alert("Introduce un número entre 1 y 151");
  }
});

input.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    boton.click();
  }
});

// --- OPCIONAL: prueba rápida en consola ---
getPokemon(1).then(p => console.log("Prueba:", p.name, p.types.map(t=>t.type.name)));
