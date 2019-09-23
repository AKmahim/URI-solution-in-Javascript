var input= require('fs').readFileSync('/dev/stdin','utf8');
// var line =input.split(' ');
var sep = [' ', '\n'];
// console.log(separators.join('|'));
var line = input.split(new RegExp(sep.join('|'), 'g'));


var x1 = parseFloat(line.shift());

var y1 = parseFloat(line.shift());

var x2 = parseFloat(line.shift());
var y2 = parseFloat(line.shift());

var a =Math.pow((x2-x1),2);
var b = Math.pow((y2-y1),2);

var result = a+b;
var c = Math.sqrt(result).toFixed(4);
console.log(c);


