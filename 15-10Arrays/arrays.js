// ======================================================
// PRÃCTICA: Manejo de Arrays en JavaScript
// Autor: TanausÃº Castrillo EstÃ©vez
// MÃ³dulo: Desarrollo Web en Entorno Cliente (2Âº DAW)
// DuraciÃ³n estimada: SesiÃ³n del marter - 1 hora
// ======================================================

// -----------------------------
// ARRAY INICIAL DE PRODUCTOS
// -----------------------------
const productos = [
  { id: 1, nombre: "Manzana", precio: 1.20 },
  { id: 2, nombre: "PlÃ¡tano", precio: 0.99 },
  { id: 3, nombre: "Naranja", precio: 1.10 },
  { id: 4, nombre: "Pera", precio: 1.35 },
  { id: 5, nombre: "SandÃ­a", precio: 3.50 },
  { id: 6, nombre: "Manzana Golden", precio: 1.45 },
  { id: 7, nombre: "Manzana Reineta", precio: 1.60 }
];

console.log("Array original de productos:");
console.table(productos);

// -----------------------------
// AÃ‘ADIR Y ELIMINAR ELEMENTOS
// -----------------------------

// AÃ±adir un nuevo producto al final
productos.push({ id: 8, nombre: "MelÃ³n", precio: 2.75 });
console.log("Producto aÃ±adido al final con push():", productos);
console.table(productos);

// Eliminar el Ãºltimo producto
productos.pop();
console.log("Producto eliminado con pop():", productos);
console.table(productos);

// AÃ±adir uno al principio
productos.unshift({ id: 0, nombre: "Fresa", precio: 2.10 });
console.log("Producto aÃ±adido al principio con unshift():", productos);
console.table(productos);

// Eliminar el primero
productos.shift();
console.log("Producto eliminado del principio con shift():", productos);
console.table(productos);

// -----------------------------
// BUSCAR Y FILTRAR
// -----------------------------

// Encontrar todos los productos que contengan "Manzana" en el nombre
const manzanas = productos.filter(p => p.nombre.includes("Manzana"));
console.log(" Productos que contienen 'Manzana' en su nombre:");
console.table(manzanas);

const manzanas2 = productos.filter(p => p.nombre ==="Manzana");
console.log(" Productos cuyo nombre exacto es 'Manzana'");
console.table(manzanas2);


// Encontrar producto con nombre exacto "Naranja"
const encontrado = productos.find(p => p.nombre === "Naranja");
console.log(" Producto encontrado con find():", encontrado);
console.table(encontrado);

// Filtrar productos con precio mayor a 1.20 â‚¬
const filtrados = productos.filter(p => p.precio > 1.20);
console.log(" Productos con precio > 1.20â‚¬ (filter()):");
console.table(filtrados);

// Comprobar si existe un producto llamado "PlÃ¡tano"
const existePlatano = productos.some(p => p.nombre === "PlÃ¡tano");
console.log("Â¿Existe 'PlÃ¡tano' en el array?", existePlatano);


// -----------------------------
// TRANSFORMAR DATOS
// -----------------------------

// Crear nuevo array solo con nombres
const nombres = productos.map(p => p.nombre);
console.log("Lista de nombres (map()):", nombres);

// Calcular el precio total de todos los productos
const total = productos.reduce((acum, p) => acum + p.precio, 0);
console.log(`Precio total de todos los productos: ${total.toFixed(2)}â‚¬`);

// Ordenar productos por precio de menor a mayor
const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio (sort()):");
console.table(ordenados);

// -----------------------------
// RECORRER EL ARRAY
// -----------------------------

console.log("******************RECORRIDOS********************")

// For clasico
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i].nombre, productos[i].precio);
}

//Con for ... of
for (const producto of productos) {
  console.log(producto.nombre, producto.precio);
}

// Con forEach
console.log("Recorriendo productos con forEach():");
productos.forEach(p => console.log(`${p.nombre} - ${p.precio}â‚¬`));

// Con forEach con Ã­ndice
productos.forEach((p, index) => {
  console.log(`${index + 1}. ${p.nombre}`);
});

// -----------------------------
// ORDENACION 
// -----------------------------

//Ordenamos por precio
const ordenadosPorPrecioDesc = [...productos].sort((a, b) => b.precio - a.precio);
console.log(ordenadosPorPrecioDesc);

const ordenadosPorNombre = [...productos].sort((a, b) =>
  a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1
);

const ordenadosPorNombre2 = [...productos].sort((a, b) =>
  a.nombre.localeCompare(b.nombre)
);

// -----------------------------
// DESAFÃO EXTRA
// -----------------------------

/**
 * FunciÃ³n que muestra productos cuyo precio supera un lÃ­mite
 * @param {Array} array - lista de productos
 * @param {Number} limite - precio mÃ­nimo
 */
function mostrarProductosCaros(array, limite) {
  const caros = array.filter(p => p.precio > limite);
  console.log(` Productos con precio superior a ${limite}â‚¬:`);
  caros.forEach(p => console.log(` - ${p.nombre} (${p.precio}â‚¬)`));
}

mostrarProductosCaros(productos, 1.20);

// -----------------------------
// OPCIONAL: ENCADENAMIENTO DE MÃ‰TODOS
// -----------------------------

const preciosOrdenados = productos
  .filter(p => p.precio > 1)
  .sort((a, b) => a.precio - b.precio)
  .map(p => ({ nombre: p.nombre, precio: p.precio }));

console.log("Encadenamiento de mÃ©todos (filter + sort + map):");
console.table(preciosOrdenados);

// -----------------------------
// FIN DE LA PRÃCTICA
// -----------------------------
console.log(" PrÃ¡ctica finalizada. Â¡Buen trabajo!");