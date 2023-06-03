const ulCompra = document.querySelector("#carrito-compra ul");
const selectcCantidadProduc = document.querySelector("#cont-productos select");
const imgProducto = document.querySelector("#cont-productos img");

const pTotal = document.querySelector("#total");
const pNombreProducto = document.querySelector("#nombre-producto");
const pPrecioProducto = document.querySelector("#precio-producto");

const PRECIO_PRODUCTO_1 = 500;
const PRODUCTO_1 = "Vaso";
const OFERTA_1_PRODUC_1 = 10;
const OFERTA_2_PRODUC_1 = 25;

const PRECIO_PRODUCTO_2 = 1000;
const IMG_PRODUCTO_2 = "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/166/423/products/screenshot_20210302-11261921-49ac177356f34a196516146954833219-640-0.png";
const PRODUCTO_2 = "Plato";
const OFERTA_1_PRODUC_2 = 15;
const OFERTA_2_PRODUC_2 = 30;
const OFERTA_REGALO_PRODUCTO_2 = 1

let costoTotal = 0
let nombreProductoActual = PRODUCTO_1
let precioProductoActual = PRECIO_PRODUCTO_1



function agregarProductCarrito() {
    let cantidadProductos = parseInt (selectcCantidadProduc.value);
    actualizarCostoTotal(cantidadProductos);
    ulCompra.innerHTML += `<li> ${precioProductoActual} (${cantidadProductos}) </li>`;
    pTotal.innerHTML = `Total: $${costoTotal}`;
}

function actualizarCostoTotal(cantidadProductos) {
    let descuentoDetectado = 0
    switch (cantidadProductos) {
        case 3:
            descuentoDetectado = OFERTA_1_PRODUC_1;
            break;
    
        default:
    }
    costoTotal += (precioProductoActual *((100-descuentoDetectado)/100))* cantidadProductos;
}

function pasarSigProducto() {
    imgProducto.src = IMG_PRODUCTO_2;
    pNombreProducto.innerHTML = PRODUCTO_2;
    pPrecioProducto.innerHTML = `$${PRECIO_PRODUCTO_2}`;

    actualizarInfoProductoActual();

}

function actualizarInfoProductoActual() {
    nombreProductoActual = PRODUCTO_2;
    precioProductoActual = PRECIO_PRODUCTO_2;
}
