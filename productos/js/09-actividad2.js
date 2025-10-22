
let productoSeleccionado = 7854  // CAMBIA ESTE VALOR POR LOS IDs  DE LOS PRODUCTOS DEL ARRAY

let usuario = {
    nombre : 'Tanausú',
    apellidos : 'Castrillo Estévez',
    edad : 43,
    rol : 3,
    descuento: 25,
    id : 7893,
    imagen : '7893.jpeg'
}

let productos = [
    {id:8458, nombre: 'Pantalón', precio: 25.5, imagen:'pantalon.jpeg'},
    {id:4321, nombre: 'Blusa', precio: 35.5, imagen:'blusa.jpeg'},
    {id:1234, nombre: 'Gorra', precio: 47.5, imagen:'gorra.jpeg'},
    {id:7854, nombre: 'Reloj', precio: 28.5, imagen:'reloj.jpeg'},
    {id:5555, nombre: 'Vestido', precio: 29.5, imagen:'vestido.jpeg'},
]


/**
 * Recorre con un simple FOR el array de productos hasta encontrar el seleccionado 
 * por el cliente (suponemos existe)
 *
 * @param {number} id - ID de nuestro producto en el array
 * 
 * @returns {object} producto - El objeto producto de nuestro array
 * 
 * @example
 * 
 * let producto = findProductosById(id)
 *  
 */

function findProductosById(id) {
    for (let i = 0; i <= productos.length; i++)
        if (productos[i].id == id) {
            return productos[i]
            break
        }
}


/**
 * Calcula dado un precio y un descuento, el precio final con el descuento aplicado
 *
 * @param {number} precio - El precio del producto seleccionado
 * @param {number} descuento - El descuento de fidelización que tiene el cliente
 * 
 * @example
 * 
 * let precioFinal =  calcularDescuento(precio, descuento)
 *  
 */


function calcularDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}


/**
 * Muestra la información del usuario por pantalla
 *
 * @param {Object} usuario - El objeto que representa a un usuario en nuestro modelo
 * @param {Object} elementoHTML - Objeto del DOM al que se desea añadir dinámicamente la información del usuario
 * 
 * @example
 * 
 * let element = document.querySelector("body")  Si queremos añadir el producto al Body
 * mostrarUsuario(element, usuario)
 *  
 */


function mostrarUsuario( elementoHTML, usuario ) {
    let resultado = `<div class="capa-usuario">                    
            <img class="img-usuario" src="./images/${usuario.imagen}"/>
            <p><strong>${usuario.nombre}</strong></p>
            <p class="texto-descuento"><strong>¡Tienes un ${usuario.descuento}%!</strong></p>
        </div>`
        elementoHTML.innerHTML += resultado    
}

/**
 * Muestra un producto por pantalla
 *
 * @param {Object} elementoHTML - Objeto del DOM al que se desea añadir dinámicamente la información del producto
 * @param {Object} productoSeleccionado - El objeto producto seleccionado que se desea mostrar
 * 
 * @example
 * 
 * let element = document.querySelector("body")  Si queremos añadir el producto al Body
 * mostrarProducto(element, producto)
 *  
 */

function mostrarProducto( elementoHTML, productoSeleccionado ) {
    let producto = findProductosById (productoSeleccionado)
    let resultado = `<div class="capa-producto">                        
        <img class="img-producto" src="./images/${producto.imagen}"/>        
        <div>
            <p><strong>Producto: </strong>${producto.nombre}</p>
            <p><strong>Precio: </strong>${producto.precio}</p>
            <p class="texto-descuento"><strong>Precio final : </strong>${calcularDescuento(producto.precio, usuario.descuento)}</p>
        </div>`
         elementoHTML.innerHTML += resultado 

    return resultado

}

// AQUI COMIENZA A LLAMARSE A NUESTRO  CÓGIGO

let element = document.querySelector("body")

mostrarUsuario(element, usuario)
mostrarProducto( element, productoSeleccionado)