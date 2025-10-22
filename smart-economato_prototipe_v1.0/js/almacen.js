import { productos } from './productos.js';
import { filtrarPorCategoria, buscarProducto, ordenarPorPrecio, comprobarStockMinimo } from './funciones.js';

const tabla = document.querySelector('#tablaProductos tbody');
const resumen = document.querySelector('#resumen');
const inputBusqueda = document.querySelector('#busqueda');
const btnBuscar = document.querySelector('#btnBuscar');
const btnFiltrar = document.querySelector('#btnFiltrarCategoria');
const btnOrdenar = document.querySelector('#btnOrdenar');
const btnStock = document.querySelector('#btnStock');
const btnMostrarTodos = document.querySelector('#btnMostrarTodos');
const selectCategoria = document.querySelector('#categoriaSelect');
const selectOrden = document.querySelector('#ordenSelect');

let productosMostrados = [...productos];

function renderizarTabla(datos) {
  tabla.innerHTML = '';
  if (datos.length === 0) {
    tabla.innerHTML = '<tr><td colspan="8" style="text-align:center;">No se encontraron productos</td></tr>';
    resumen.textContent = '';
    return;
  }

  datos.forEach(p => {
    const fila = document.createElement('tr');
    if (p.stock < p.stockMinimo) fila.classList.add('alerta');
    fila.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria.nombre}</td>
      <td>${p.precio.toFixed(2)}</td>
      <td>${p.stock}</td>
      <td>${p.stockMinimo}</td>
      <td>${p.proveedor.nombre}</td>
      <td>${p.proveedor.isla}</td>
    `;
    tabla.appendChild(fila);
  });

  const totalProductos = datos.length;
  const valorTotal = datos.reduce((acc, p) => acc + p.precio * p.stock, 0).toFixed(2);
  resumen.textContent = `Productos mostrados: ${totalProductos} | Valor total del stock: ${valorTotal} €`;
}

btnBuscar.addEventListener('click', () => {
  const nombre = inputBusqueda.value.trim();
  if (nombre) {
    const resultado = buscarProducto(productos, nombre);
    renderizarTabla(resultado ? [resultado] : []);
  }
});

btnFiltrar.addEventListener('click', () => {
  const cat = selectCategoria.value;
  // ...
});

btnOrdenar.addEventListener('click', () => {
  const orden = selectOrden.value;
  
});

btnStock.addEventListener('click', () => {
  
});

btnMostrarTodos.addEventListener('click', () => {
  productosMostrados = [...productos];
  inputBusqueda.value = '';
  selectCategoria.value = '';
  renderizarTabla(productosMostrados);
});

renderizarTabla(productos);