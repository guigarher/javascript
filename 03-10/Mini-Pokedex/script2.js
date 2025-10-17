// =======================
// 0) REFERENCIAS AL DOM
// =======================
const pokedex      = document.getElementById("pokedex");
const estado       = document.getElementById("estado");
const inputCantidad= document.getElementById("cantidad");
const btnMostrar   = document.getElementById("mostrar");
const inputId      = document.getElementById("pokeId");
const btnMostrarId = document.getElementById("mostrarId");

// --- 1) TRAER UN POKÉMON ---
async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status} (id ${id})`);
  const data = await res.json();
  return data;
}
async function getCharmander(){
  let charmander = await getPokemon(4);
  }
async function loadPokemons(){
  for(let i = 1; i =10; i++){
    let pokemons = await getPokemon(i);
  }
}
let charmander = getCharmander();
console.log(charmander);

let mostrarPokemons = loadPokemons();
console.log(mostrarPokemons);


