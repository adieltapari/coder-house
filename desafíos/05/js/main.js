
function calcularProducto(){

const suma = (a, b) => a + b;
const resta = (a,b) => a - b;

const iva = (x) => x * 0.21;
let precioProducto = parseInt(prompt("Ingrese el valor del producto"));
let precioDescuento = parseInt(prompt("Ingrese el descuento en pesos"));

//calculo el precioProducto + IVA - precioDescuento
let nuevoPrecio = resta(
    suma(precioProducto, iva(precioProducto)),
    precioDescuento
);
alert("Precio del producto  $ "+nuevoPrecio);
}