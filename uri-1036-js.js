var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');


var a =parseFloat(line.shift());
var b =parseFloat(line.shift());
var c = parseFloat(line.shift());

var d=(Math.pow(b,2)-(4*a*c));
var r1=((-b+Math.sqrt(d))/(2*a)).toFixed(5);
var r2 = ((-b-Math.sqrt(d))/(2*a)).toFixed(5);

if(a!=0 && d>0){
    console.log('R1 = ' + r1);
    console.log('R2 = ' + r2);
}
else{
    console.log('Impossivel calcular');
    
}

