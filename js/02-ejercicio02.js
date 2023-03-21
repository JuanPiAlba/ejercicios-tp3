/*

Dificultad:  🟢🟡
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

let ciudades = [];
while (confirm()) {
  let ciudad = prompt("Ingrese ciudades.");
  ciudades.push(ciudad);
}

document.write(ciudades.length);
document.write(ciudades[(0, 2, ciudades.length -1)]);
ciudades.push("Paris");
document.write(ciudades) // ciudades[ciudades.length]=barcelona
document.write(`<p>Elemenot de la segunda posicion<p> ${ciudades[1]}</p>`);
ciudades.splice(1, 1, ciudades.length);
