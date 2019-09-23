var input= require('fs').readFileSync('/dev/stdin','utf8');
var line =input.split('\n');

var r = parseFloat(line.shift());
var result = ((4/3) * 3.14159 * r*r*r).toFixed(3);

console.log('VOLUME = ' + result);