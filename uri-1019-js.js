var input = require('fs').readFileSync('/dev/stdin','utf8');
var line=input.split('\n');


var n=parseInt(line.shift());
var h,m,s;
h=n/3600;
var h1 =parseInt(h);
m=n%3600/60;
var m1 =parseInt(m);

s=n%60;
var s1 =parseInt(s);

console.log(h1+':'+m1+':'+s1);