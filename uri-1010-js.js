var input= require('fs').readFileSync('/dev/stdin','utf8');
// var line =input.split(' ');
var sep = [' ', '\n'];
// console.log(separators.join('|'));
var line = input.split(new RegExp(sep.join('|'), 'g'));

var a1 = parseInt(line.shift());
var b1 = parseInt(line.shift());
var c1 = parseFloat(line.shift());
var a2 = parseInt(line.shift());
var b2 = parseInt(line.shift());
// console.log(b2);

var c2 = parseFloat(line.shift());
// console.log(c2);

var result = (b1*c1 + b2*c2).toFixed(2);
// console.log(result);


console.log('VALOR A PAGAR: R$ ' + result);
