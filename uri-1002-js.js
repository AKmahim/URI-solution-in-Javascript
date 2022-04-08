var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var r=parseFloat(lines.shift());

var area = 3.14159 * r * r;
console.log("A=" + area.toFixed(4));
