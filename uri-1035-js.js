var input = require('fs').readFileSync('/dev/stdin','utf8');
var line =input.split(' ');

var a =parseInt(line.shift());
var b =parseInt(line.shift());
var c = parseInt(line.shift());
var d = parseInt(line.shift());

if((b>c && d>a) && (c+d>a+b) && c>0 && d>0 && (a%2==0)){
    console.log('Valores aceitos');
    
}
else{
    console.log('Valores nao aceitos');
    
}