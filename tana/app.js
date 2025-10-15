const container = document.getElementById("pokemon-container");

// Obtener datos de un Pokémon por ID
async function getPokemon(id) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) 
      throw new Error(`Error ${response.status} en la solicitud ... `);
    const data = await response.json();      
    return data;  

}

// Crear card en el DOM
function createCard(pokemon) {  
  return `
    <div class="card">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h2>${pokemon.name.toUpperCase()}</h2>
      <p>Altura: ${pokemon.height}</p>
      <p>Peso: ${pokemon.weight}</p>
      <p>Tipo: ${pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  `  
}

async function loadPokemonsV4() {
  container.innerHTML = "<p>Cargando...</p>";

  try {
    //  Creamos el  array con todas las promesas (una por cada Pokémon)
    const promises = []
    
    promises.push(getPokemon("X"))
    promises.push(getPokemon(4))
    
    
    

    // Esperamos a que TODAS las promesas se resuelvan o fallen
    const results = await Promise.race(promises);

    console.log( results )
    // Filtramos solo las que fueron exitosas (fulfilled) recordar los diferentes estados de las promesas
    
    const cards = createCard(results)
    container.innerHTML = cards || "<p>No se pudieron cargar los Pokémon.</p>";
  } catch (error) {
    // Esto capturaría errores fuera de Promise.allSettled (muy raro)
    console.error("Error inesperado:", error);
    container.innerHTML = "<p>Error inesperado al cargar los Pokémon.</p>";
  }
}



async function loadPokemonsV3() {
  container.innerHTML = "<p>Cargando...</p>";

  try {
    //  Creamos el  array con todas las promesas (una por cada Pokémon)
    const promises = []
    for (let i = 1; i <= 10; i++) {
      if ( i == 4)
        promises.push(getPokemon(4))
     else  promises.push(getPokemon(i))
    }

    // Esperamos a que TODAS las promesas se resuelvan o fallen
    const results = await Promise.allSettled(promises);

    console.log( results )
    // Filtramos solo las que fueron exitosas (fulfilled) recordar los diferentes estados de las promesas
    
    const successful = results
      .filter(r => r.status === "fulfilled" && r.value !== null)
      .map(r => r.value); // aquí solo te quedas con los Pokémon válidos

    const cards = successful.map(p => createCard(p) ).join("");

    // Mostramos  los resultados (o mensaje si ninguno se cargó)
    container.innerHTML = cards || "<p>No se pudieron cargar los Pokémon.</p>";
  } catch (error) {
    // Esto capturaría errores fuera de Promise.allSettled (muy raro)
    console.error("Error inesperado:", error);
    container.innerHTML = "<p>Error inesperado al cargar los Pokémon.</p>";
  }
}




async function loadPokemonsV2() {
  const start = performance.now()
  container.innerHTML = "<p>Cargando...</p>";  
  
  try {
    // Creamos un array con todas las promesas sin esperarlas todavía
    const promises = [];
    for (let i = 1; i <= 10; i++)     
      promises.push(getPokemon(i))
    


    // Esperamos a que TODAS las promesas terminen en paralelo
    
    const pokemons = await Promise.all(promises);
           
    // Creamos las tarjetas de todos los Pokémon
   //const cards = pokemons.map(p => createCard(p)).join("");
        
    // Mostramos el resultado en pantalla
    //container.innerHTML = cards;
   const end = performance.now()
   console.log(`Tiempo de ejecución: ${(end - start).toFixed(3)} ms`)
  } catch (error) {
    console.error("Hemos recibido el siguiente error: "  + error);
    container.innerHTML = "<p>Error al cargar los Pokémon.</p>";
  }
}




// Cargar los primeros 10 Pokémon
async function loadPokemons() {
  const start = performance.now()
  container.innerHTML = "<p>Cargando...</p>";
  let cards = "";
  for (let i = 1; i <= 10; i++) {
    try {
      //cards += createCard(pokemon);
    } catch (error) {
      console.error(error);
    }
  }
  container.innerHTML = cards;
const end = performance.now()
console.log(`Tiempo de ejecución: ${(end - start).toFixed(3)} ms`)
}


loadPokemons()
