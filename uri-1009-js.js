var input= require('fs').readFileSync('/dev/stdin','utf8');
var line =input.split('\n');

var name=line[0];
line.shift();
var a=parseFloat(line.shift());
var b = parseFloat(line.shift());
var percent=(a+(b*15)/100).toFixed(2);
console.log('TOTAL = R$ ' + percent);
