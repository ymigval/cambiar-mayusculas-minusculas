# FormatoTexto.js
Convertir texto a mayúsculas, minúsculas u otros estilos
Autor: YMiGVal

Entrada y salida
Como entra se debe pasar el texto al constructor de la clase. Si no se pasa un valor
la salida devuelve un null
*FormatoTexto(string)

Como salida se puede un tener varios resultados
*textoMayusculas():string > Texto en mayúsculas
*textoMinusculas():string > Texto en minúsculas
*textoTipoOracion():string > Tipo oración
*textoErCPM():string > La primera letra de cara palabra en mayúscula


Ejemplo:
var parrafo = "Un fractal es un objeto geométrico cuya estructura básica, fragmentada o aparentemente irregular, se repite a diferentes escalas. Muchas estructuras naturales son de tipo fractal. La propiedad matemática clave de un objeto genuinamente fractal es que su dimensión métrica fractal es un número racional mayor a su dimensión topológica.";

var new formatoTexto = new FormatoTexto(parrafo);

formatoTexto.textoMayusculas():
UN FRACTAL ES UN OBJETO GEOMÉTRICO CUYA ESTRUCTURA BÁSICA, FRAGMENTADA O APARENTEMENTE IRREGULAR, SE REPITE A DIFERENTES ESCALAS. MUCHAS ESTRUCTURAS NATURALES SON DE TIPO FRACTAL. LA PROPIEDAD MATEMÁTICA CLAVE DE UN OBJETO GENUINAMENTE FRACTAL ES QUE SU DIMENSIÓN MÉTRICA FRACTAL ES UN NÚMERO RACIONAL MAYOR A SU DIMENSIÓN TOPOLÓGICA.

formatoTexto.textoMinusculas():
un fractal es un objeto geométrico cuya estructura básica, fragmentada o aparentemente irregular, se repite a diferentes escalas. muchas estructuras naturales son de tipo fractal. la propiedad matemática clave de un objeto genuinamente fractal es que su dimensión métrica fractal es un número racional mayor a su dimensión topológica.

formatoTexto.textoTipoOracion():
Un fractal es un objeto geométrico cuya estructura básica, fragmentada o aparentemente irregular, se repite a diferentes escalas. Muchas estructuras naturales son de tipo fractal. La propiedad matemática clave de un objeto genuinamente fractal es que su dimensión métrica fractal es un número racional mayor a su dimensión topológica.

formatoTexto.textoErCPM():
Un Fractal Es Un Objeto Geométrico Cuya Estructura Básica, Fragmentada O Aparentemente Irregular, Se Repite A Diferentes Escalas. Muchas Estructuras Naturales Son De Tipo Fractal. La Propiedad Matemática Clave De Un Objeto Genuinamente Fractal Es Que Su Dimensión Métrica Fractal Es Un Número Racional Mayor A Su Dimensión Topológica.
