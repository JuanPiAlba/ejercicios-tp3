/*

Dificultad:  🟢🟡
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

*/

let palabra = prompt('Ingrese una palabra')


function cadenaMayus(palabra){
    if(palabra===palabra.toUpperCase())
    return 'La palabra es mayuscula'
    if(palabra===palabra.toLowerCase())
    return 'la palabra es minuscula'
    else
    return 'la palabra tiene ambas'
}
document.write(cadenaMayus(palabra))