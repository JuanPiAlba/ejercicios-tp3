/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let dado1;
let dado2;
let suma;
let array = [];

for (i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  suma = dado1 + dado2;
  array.push(suma);
  suma = 0;
}
document.write(suma);
document.write(array);

//

let muestras = [];
let cuantasApariciones = [];

for (i = 0; i < array.length; i++) {
  muestras[i] = array[i];
  let repeticiones = 0;
  for (j = 0; j < array.length; j++) {
    if (muestras[i] === array[j]) repeticiones++;
  }
  cuantasApariciones[i] = repeticiones;
}

document.write(`<br><br>muestras: ${muestras}`);
document.write(`<br>repeticiones: ${cuantasApariciones}`);

let muestraSinDuplicados = array.filter((item, index) => {
  return array.indexOf(item) === index;
});
console.log(muestraSinDuplicados);

let resultado = [];

for (i = 0; i < muestraSinDuplicados.length; i++) {
  let repeticiones = 0;
  for (j = 0; j < array.length; j++) {
    if (muestraSinDuplicados[i] === array[j]) repeticiones++;
  }
  resultado[i] = repeticiones;
}

document.write(`<br><br>Sumas de los dados: ${muestraSinDuplicados}`);
document.write(`<br>Cantidad de repeticiones: ${resultado}`);

document.write("<table border>");
for (i = 0; i < resultado.length; i++) {
  document.write("<tr>");
  document.write("<td>");
  document.write(muestraSinDuplicados[i]);
  document.write("</td>");
  document.write("<td>");
  document.write(resultado[i]);
  document.write("</td>");
  document.write("</tr>");
}
document.write("</table>");
