"use strict";
exports.__esModule = true;
// aplicar descuento
var rls = require("readline-sync");
var preciofinal = 0;
var precioproductouno = 200;
var precioproductodos = 350;
var subtotal = 0;
var cantidadproductouno = rls.questionInt("cantidad de producto uno que compro usuario: ");
var cantidadproductodos = rls.questionInt("cantidad de pruducto dos que compro usuario: ");
var valordescuento = 0;
subtotal = (cantidadproductouno * precioproductouno) + (cantidadproductodos * precioproductodos);
console.log(cantidadproductouno);
console.log(cantidadproductodos);
console.log(subtotal);
console.log("el usuario compro", cantidadproductouno, "cantidadproductouno", "el usuario compro", cantidadproductodos, "\ncantidadproductodos", "\nel subtotal es:", subtotal);
if (subtotal > 1000) {
    valordescuento = subtotal * 0.1;
    preciofinal = subtotal - valordescuento;
    console.log("usted ahora:$ ", valordescuento, "por haber comprado mas de $1000,\nel precio final es de: ", preciofinal);
}
else {
    preciofinal = subtotal;
    console.log(" gracias por confiar en nosotros. \nel precio final es de: ", preciofinal);
}
