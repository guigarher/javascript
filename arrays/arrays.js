// Array de objetos tipo "tienda"
let productos = [
  { id: 1, nombre: "Camiseta", precio: 20 },
  { id: 2, nombre: "Pantalón", precio: 35 },
  { id: 3, nombre: "Zapatos", precio: 50 },
  { id: 4, nombre: "Gorra", precio: 15 }
];

// Función para aplicar un descuento a todos los productos
function aplicarDescuento(porcentaje) {
  console.log(`Aplicando descuento del ${porcentaje}%...`);

  for (let p of productos) {
    let precioFinal = p.precio - (p.precio * porcentaje / 100);
    console.log(`${p.nombre} (ID: ${p.id}) → Precio original: ${p.precio} € → Con descuento: ${precioFinal.toFixed(2)} €`);
  }
}

// Llamamos a la función
aplicarDescuento(10); // aplica 10% de descuento
