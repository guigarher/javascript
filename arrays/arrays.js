// Array de objetos 
const productos = [
  { id: 1, nombre: "Camiseta", precio: 20, imagen: "https://www.soloepis.com/7990-large_default/camiseta-algodn-varios-colores.jpg" },
  { id: 2, nombre: "Pantalón", precio: 35, imagen: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-260nw-2466839305.jpg" },
  { id: 3, nombre: "Zapatos",  precio: 50, imagen: "https://www.mtngshoes.com/dw/image/v2/BHFB_PRD/on/demandware.static/-/Sites-articulos-catalog_MU/default/dwf07c08f9/images/Zapatillas-Hombre-FREE-gris-60846-C58559-MTNG-02.jpg?sw=320&sh=320" },
  { id: 4, nombre: "Gorra",    precio: 15, imagen: "https://camisetascomohongos.es/4190-large_default/gorra-adulto-5-paneles-personalizada-naranja.jpg" }
];

// Función para aplicar un descuento a todos los productos
function aplicarDescuento(porcentaje) {
  console.log(`Aplicando descuento del ${porcentaje}%...`);

  // Variable para ir construyendo el HTML
  let html = `<p>Aplicando descuento del <strong>${porcentaje}%</strong>:</p>`;
  html += "<ul>";

  for (let p of productos) {
    let precioFinal = p.precio - (p.precio * porcentaje / 100);

    // ---- Consola ----
    console.log(`${p.nombre} (ID: ${p.id}) → Precio original: ${p.precio} € → Con descuento: ${precioFinal.toFixed(2)} €`);

    // ---- HTML ----
    html += `
      <li>
        <img src="${p.imagen}" alt="${p.nombre}" width="80"><br>
        ${p.nombre} (ID: ${p.id}) →
        original: ${p.precio.toFixed(2)} € ·
        final: ${precioFinal.toFixed(2)} €
      </li>
    `;
  }

  html += "</ul>";

  // Insertamos el HTML dentro del div 
  document.getElementById("resultado").innerHTML = html;
}

// Llamamos a la función con 10% de descuento
aplicarDescuento(10);
