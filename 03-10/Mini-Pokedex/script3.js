const pokedex = document.getElementById("pokedex");

// 1) igual que ya tienes:
async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) throw new Error(`HTTP ${response.status} (id ${id})`);
  return await response.json();
}

// 2) tu plantilla
function createCard(pokemon) {
  return `
    <div class="card">
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>${pokemon.height} dm / ${pokemon.weight} hg</p>
      <p>Tipo: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  `;
}

// 3) cargar N pokémon “robusto” (tolera fallos individuales)
async function loadPokemonsSettled(n) {
  pokedex.innerHTML = "<p>Cargando...</p>";

  try {
    const ids = Array.from({ length: n }, (_, i) => i + 1);
    // Fuerzo un fallo en el 4 para probar (como hacías tú). Quita si no quieres.
    const promises = ids.map(id => (id === 4 ? getPokemon("X") : getPokemon(id)));

    const settled = await Promise.allSettled(promises);

    const ok = settled
      .filter(r => r.status === "fulfilled")
      .map(r => r.value);

    const failed = settled
      .filter(r => r.status === "rejected");

    // pinto solo los OK
    if (ok.length) {
      pokedex.innerHTML = ok.map(createCard).join("");
    } else {
      pokedex.innerHTML = "<p>No se pudo cargar ningún Pokémon.</p>";
    }

    // aviso de fallos (opcional: mostrar ids si los llevas en el mensaje)
    if (failed.length) {
      console.warn(`⚠️ ${failed.length} Pokémon fallaron y no se mostrarán.`);
    }
  } catch (e) {
    // solo cae aquí si pasa algo fuera de las promesas (raro)
    console.error(e);
    pokedex.innerHTML = "<p>Error general cargando los datos.</p>";
  }
}

// ejemplo:
loadPokemonsSettled(10);
