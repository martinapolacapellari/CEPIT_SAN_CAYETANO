// aplicar descuento
import * as rls from "readline-sync";
let preciofinal: number = 0;
let precioproductouno: number = 200;
let precioproductodos: number = 350;
let subtotal: number = 0;

let cantidadproductouno: number = rls.questionInt("cantidad de producto uno que compro usuario: ");
let cantidadproductodos: number = rls.questionInt("cantidad de pruducto dos que compro usuario: ");
let valordescuento: number = 0 ;

subtotal = (cantidadproductouno * precioproductouno ) + (cantidadproductodos * precioproductodos);
console.log(cantidadproductouno);
console.log(cantidadproductodos);
console.log(subtotal);
console.log( "el usuario compro", cantidadproductouno, "cantidadproductouno",  "el usuario compro",cantidadproductodos, "\ncantidadproductodos", "\nel subtotal es:", subtotal);


if (subtotal > 1000) {
    valordescuento = subtotal* 0.1;
    preciofinal = subtotal - valordescuento;
console.log("usted ahora:$ ", valordescuento, "por haber comprado mas de $1000,\nel precio final es de: ", preciofinal);

} else {
    preciofinal = subtotal;
    console.log( " gracias por confiar en nosotros. \nel precio final es de: ", preciofinal); 
}