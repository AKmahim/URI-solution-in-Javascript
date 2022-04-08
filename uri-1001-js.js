var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var a=parseFloat(lines.shift());
var b=parseFloat(lines.shift());

var x = a+ b;
console.log("X = " + x);
