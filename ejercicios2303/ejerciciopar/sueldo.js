"use strict";
/*Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:


Sueldo Actual       Sueldo con Aumento
0 - 15.000$               20%
15.001 - 20.000$           10%
20.001 - 25.000$           5%
Más de 25.000$        No hay aumento
Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre
*/
exports.__esModule = true;
var rls = require("readline-sync");
var sueldo = rls.questionFloat("sueldo del empleado: ");
if (sueldo < 15000)
    console.log("sueldo con aumento: ", sueldo * 1.20);
else if (sueldo > 15000 && sueldo < 20000)
    console.log("sueldo con aumento: ", sueldo * 1.10);
else if (sueldo > 20001 && sueldo < 25000)
    console.log("sueldo con aumento: ", sueldo * 0.5);
else
    (sueldo > 25000);
console.log("sueldo sin aumento: ", sueldo);
