var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var x =parseInt(line.shift());
var y = parseFloat(line.shift());

var result = (x/y).toFixed(3)

console.log(result + ' km/l');
