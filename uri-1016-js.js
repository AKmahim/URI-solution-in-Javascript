var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var x = parseInt(line.shift());
console.log(x*2 + ' minutos');
