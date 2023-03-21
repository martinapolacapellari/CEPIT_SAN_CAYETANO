/*
Volvamos a implementar el proceso que calcula
el area de un rectangulo pero para cualquier
base o altura
*el usuario debe ingresar la base y la altura por el teclado
*el area debe guardarse en una variable
*el resultado debe ser mostrado por pantalla
*/
import * as rls from "readline-sync";
const base: number = rls.questionInt("ingrese la base: ");
const altura: number = rls.questionInt("ingrese la altura: ");
const area: number = base*altura;
console.log("el area es: ", area);
