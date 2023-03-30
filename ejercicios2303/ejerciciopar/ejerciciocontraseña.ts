/*Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa
*/

import * as rls from "readline-sync";
let contador = 0;


let contraseña: string = rls.question(" Ingrese la clave: ");
contador = contador + 1;

let clave: string = "eureka";



while (contador < 3 && contraseña !== clave) {
    console.log("Ya a intendado: ", contador)
    contraseña = rls.question("Ingrese la clave: ");
     contador = contador + 1;

}
if (contraseña == clave) {
    console.log("Contraseña correcta");
} else { 
        console.log("Contraseña incorrecta.");
    }

    
    
