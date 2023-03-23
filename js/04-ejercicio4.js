/*
Funciones
Dificultad:  🟢
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

let numero = prompt("Ingrese un Numero");

function conversion(num) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
if(conversion(numero)){
    document.write('El numero es par')
}
else{
    document.write('El numero es impar')
}

