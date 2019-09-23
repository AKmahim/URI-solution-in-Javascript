var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');


var a = parseFloat(line.shift());
var b = parseFloat(line.shift());
var c = parseFloat(line.shift());

var triangle=(0.5*a*c).toFixed(3);
var circle=(3.14159*c*c).toFixed(3);
var  trapezium=(0.5*(a+b)*c).toFixed(3);
var square=(b*b).toFixed(3);
var  rectangle=(a*b).toFixed(3);

console.log('TRIANGULO: ' + triangle);
console.log('CIRCULO: ' + circle);
console.log('TRAPEZIO: ' + trapezium);
console.log('QUADRADO: ' + square);
console.log('RETANGULO: ' + rectangle);



