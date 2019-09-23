var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var a =parseFloat(line.shift());
var b=parseFloat(line.shift());
var c = parseFloat(line.shift());

var t1=b+c;
var t2=a+c;
var t3 = b+a;

if ((a < t1) && (b < t2) && (c < t3)){
    console.log('Perimetro = '+ (a+b+c).toFixed(1));
    
     }

else{
 var area=(0.5*(a+b)*c).toFixed(1);
    console.log('Area = '+ area);
    
}