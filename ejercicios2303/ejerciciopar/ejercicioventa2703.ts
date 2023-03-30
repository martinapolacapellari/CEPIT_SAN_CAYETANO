/* Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
•Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene descuento o no.
*/

import * as rls from "readline-sync";

let preciounitario : number = rls.questionInt("ingrese el precio : ");
let cantidadproducto : number = rls.questionInt("ingrese la cantidad : ");
let mesdelaño : string = rls.questionNewPassword("ingrese el mes : ");
let subtotal: number = 0;
let descuento: number = (subtotal * 0.15);
let preciofinal: number= 0
subtotal = (preciounitario * cantidadproducto );

