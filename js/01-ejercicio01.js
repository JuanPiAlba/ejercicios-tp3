/*
Dificultad:  🟢
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.write("<h2>Lista de Meses</h2>");
for (i = 0; i < meses.length; i++) {
  document.write(`<br>${meses[i]}`);
}
