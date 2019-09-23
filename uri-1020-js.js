var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n =parseInt(line.shift());

var y,m,d;
var y1,m1,d1,n1;

y=n/365;
y1=parseInt(y);
var n1;
n=n-(y*365);
n1=parseInt(n);
m=n1/30;
m1=parseInt(m);
n1=n1-(m*30);
var n2;
n2=parseInt(n1)

d=n2;
d1=parseInt(d);

console.log(y1 + ' ano(s)');
console.log(m1 + ' mes(es)');
console.log(d1 + ' dia(s)');





