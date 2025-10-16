//==============================
//REFERENCIAS AL DOM
//==============================
const pokedex          = document.getElementById("pokedex");
const estado           = document.getElementById("estado");
const inputId          = document.getElementById("pokeId");
const inputCantidad    = document.getElementById("cantidad");
const btnMostrarUno    = document.getElementById("mostrarId");
const btnMostrarVarios = document.getElementById("mostrar");

//==============================
//FUNCION PEDIR 1 POKEMON
//==============================
async function getPokemon(idOrName) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + idOrName;
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error(`HTTP ${res.status} (${idOrName})`);
    }
    const data = await res.json();
    return data;
}

//==============================
//FUNCION CREAR UNA TARJETA 
//==============================
function crearTarjeta(pokemon){
  //array de tipos principales
  const tipoPrincipal = pokemon.types[0].type.name;
  //div contenedor
  const card = document.createElement("div");
  card.classList.add("pokemon");
  card.classList.add(tipoPrincipal);
  //h2 nombre
  const h2 = document.createElement("h2");
  h2.textContent = pokemon.name;
  card.appendChild(h2);
  //img
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  card.appendChild(img);
  //div info
  const info = document.createElement("div");
  info.classList.add("info");
  card.appendChild(info);
 // función para info con strong 
  function strongLine(label, value) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = label + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(value));
    return p;
  }
  //array de tipos
  const tiposStr = pokemon.types.map(t => t.type.name).join(", ");
  //añadir lineas al div info
  info.appendChild(strongLine("Tipo",   tiposStr));
  info.appendChild(strongLine("Altura", String(pokemon.height))); 
  info.appendChild(strongLine("Peso",   String(pokemon.weight)));
  //devolver tarjeta
  return card;
}
//==============================
//FUNCION MOSTRAR 1 POKEMON
//==============================
async function mostrarUno(){
  //leer input
  const id = inputId.value.trim().toLowerCase();
  //si no hay id, salir
  if(!id) return;
  //vaciar pokedex
  pokedex.innerHTML = "";
  //mostrar estado
  estado.textContent = "Cargando...";
  try{
    //llamar a getPokemon
    const pokemon = await getPokemon(id);
    //llamar a crearTarjeta
    const card = crearTarjeta(pokemon);
    //añadir tarjeta a pokedex
    pokedex.appendChild(card);
    //vaciar estado
    estado.textContent = "";
  }catch(e){
    //si hay error, mostrarlo
    console.error(e);
    estado.textContent = "❌ No se ha encontrado ese Pokémon.";
  }
}
//==============================
//BOTON MOSTRAR 1 POKEMON
//==============================
btnMostrarUno.addEventListener("click", mostrarUno);