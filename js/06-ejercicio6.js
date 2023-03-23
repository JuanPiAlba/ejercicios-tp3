/*
Dificultad:  🟢🟡
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:



Input:
lado A = 24
lado B = 5

Output: 58
 */

let lado1 = parseInt(prompt('ingrese el un lado de el rectangulo'))
let lado2 = parseInt(prompt(' ingrese el otro lado de el rectangulo'))

function perimetrorectangulo(lado1,lado2){
  return 2*(lado1+lado2)
}
document.write(`el perimeto ingresado es ${perimetrorectangulo(lado1,lado2)}`)