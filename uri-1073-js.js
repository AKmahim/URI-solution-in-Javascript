var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n =parseInt(line.shift());

for(var a=2;a<=n;a=a+2){
    var b = a*a;
    console.log(a+'^2 = '+b);
    b=0;
    
}