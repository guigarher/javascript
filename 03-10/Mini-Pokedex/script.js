// =======================
// 0) REFERENCIAS AL DOM
// =======================
const pokedex      = document.getElementById("pokedex");
const estado       = document.getElementById("estado");
const inputCantidad= document.getElementById("cantidad");
const btnMostrar   = document.getElementById("mostrar");
const inputId      = document.getElementById("pokeId");
const btnMostrarId = document.getElementById("mostrarId");

// =======================
// 1) PEDIR 1 POKÉMON
// =======================
// Recibe un número de ID (1..1025) o un nombre ("pikachu").
// Devuelve el objeto Pokémon (promesa resuelta con el JSON).
async function getPokemon(idOrName) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + idOrName; // ← formato definido por la API
  const res = await fetch(url);           // pide al servidor (devuelve una promesa)
  if (!res.ok) {                          // si la respuesta es 404/500, etc.
    throw new Error("HTTP " + res.status + " (" + idOrName + ")");
  }
  const data = await res.json();          // convierte JSON → objeto JS (también es asíncrono)
  return data;
}

// =======================================
// 2) CREAR UNA TARJETA (ELEMENTO SEGURO)
// =======================================
// Construye el DOM de UNA tarjeta de Pokémon sin usar innerHTML.
function createCardElement(pokemon) {
  const tipoPrincipal = pokemon.types[0].type.name;

  const card = document.createElement("div");
  card.classList.add("pokemon");
  card.classList.add(tipoPrincipal);

  const h2 = document.createElement("h2");
  h2.textContent = pokemon.name;
  card.appendChild(h2);

  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default || "";
  img.alt = pokemon.name;
  card.appendChild(img);

  const info = document.createElement("div");
  info.classList.add("info");

  // Líneas "Etiqueta: valor" sin innerHTML
  function strongLine(label, value) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = label + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(value));
    return p;
  }

  const tiposStr = pokemon.types.map(t => t.type.name).join(", ");

  info.appendChild(strongLine("Tipo",   tiposStr));
  info.appendChild(strongLine("Altura", String(pokemon.height))); // dm en la API
  info.appendChild(strongLine("Peso",   String(pokemon.weight))); // hg en la API

  card.appendChild(info);
  return card;
}

// ==================================
// 3) PINTAR UNA LISTA COMPLETA (DOM)
// ==================================
function clearContainer(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

function renderList(pokemonList) {
  clearContainer(pokedex);
  for (let i = 0; i < pokemonList.length; i++) {
    const card = createCardElement(pokemonList[i]);
    pokedex.appendChild(card);
  }
}

// =========================================================
// 4) PEDIR VARIOS (TRES MODOS). Elegiremos allSettled por defecto
// =========================================================

// 4.1 Secuencial (uno a uno). Orden perfecto, más lento.
async function fetchManySequential(count) {
  const ok = [];
  const failed = [];
  for (let id = 1; id <= count; id++) {
    try {
      const p = await getPokemon(id);
      ok.push(p);
    } catch (e) {
      failed.push(id);
      console.warn("Falló id", id, e.message);
    }
  }
  return { ok, failed };
}

// 4.2 Paralelo “todo o nada” (Promise.all). Rápido; si uno falla se cancela todo.
async function fetchManyAll(count) {
  const promises = [];
  for (let id = 1; id <= count; id++) {
    promises.push(getPokemon(id));
  }
  const list = await Promise.all(promises); // lanza si falla cualquiera
  return { ok: list, failed: [] };
}

// 4.3 Paralelo tolerante (Promise.allSettled). Rápido y robusto.
async function fetchManyAllSettled(count) {
  const promises = [];
  for (let id = 1; id <= count; id++) {
    promises.push(getPokemon(id));
  }
  const settled = await Promise.allSettled(promises);

  const ok = [];
  const failed = [];

  for (let i = 0; i < settled.length; i++) {
    if (settled[i].status === "fulfilled") {
      ok.push(settled[i].value);
    } else {
      failed.push(i + 1); // id que falló (posición 1..count)
    }
  }
  return { ok, failed };
}

// ==================================================
// 5) CONTROLADORES (leen inputs, piden y luego pintan)
// ==================================================

// 5.1 Mostrar “cantidad” de Pokémon (1..1025)
async function onMostrarCantidad() {
  const n = Number(inputCantidad.value);
  if (!(n > 0 && n <= 1025)) {
    alert("Introduce un número entre 1 y 1025");
    return;
  }

  estado.textContent = "Cargando...";
  clearContainer(pokedex);

  try {
    // const res = await fetchManySequential(n);
    // const res = await fetchManyAll(n);
    const res = await fetchManyAllSettled(n);

    renderList(res.ok);

    if (res.failed.length > 0) {
      estado.textContent = "Listo. Cargados: " + res.ok.length +
                           ". Fallaron: " + res.failed.join(", ");
    } else {
      estado.textContent = "Listo. Cargados: " + res.ok.length + ".";
    }
  } catch (e) {
    console.error(e);
    estado.textContent = "Error general cargando datos.";
  }
}

// 5.2 Mostrar 1 Pokémon por ID o nombre
async function onMostrarPorId() {
  const idOrName = (inputId.value || "").trim().toLowerCase();
  if (idOrName === "") {
    alert("Escribe un ID (1..1025) o un nombre (ej: pikachu)");
    return;
  }

  estado.textContent = "Cargando...";
  clearContainer(pokedex);

  try {
    const p = await getPokemon(idOrName); // puede ser "25" o "pikachu"
    renderList([p]);                      // pintamos una lista de 1
    estado.textContent = "Listo: " + p.name;
  } catch (e) {
    console.error(e);
    estado.textContent = "No se encontró " + idOrName + " (" + e.message + ")";
  }
}

// ==========================
// 6) EVENTOS DE LOS BOTONES
// ==========================
btnMostrar.addEventListener("click", onMostrarCantidad);
btnMostrarId.addEventListener("click", onMostrarPorId);

// (Opcional) Enter en los inputs
inputCantidad.addEventListener("keydown", function (ev) {
  if (ev.key === "Enter") onMostrarCantidad();
});
inputId.addEventListener("keydown", function (ev) {
  if (ev.key === "Enter") onMostrarPorId();
});
