//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres

import * as rls from "readline-sync";

let numero1: number = rls.questionInt("ingrese numero : ");
let numero2: number = rls.questionInt("ingrese numero : ");
let numero3: number = rls.questionInt("ingrese numero : ");

if (numero1 === numero2 && numero2 === numero3 && numero1 === numero3) {
    console.log("Todos los numeros son iguales");
}
if (numero1 >numero2 && numero1> numero3 ) {
    console.log("El numero mayor es: ", numero1);
}
if (numero2> numero3 && numero2 > numero1) {
    console.log("El numero mayor es : ", numero2);

}
if (numero3 > numero1 && numero3 > numero2) {
    console.log("El numero mayor es: ", numero3);
}