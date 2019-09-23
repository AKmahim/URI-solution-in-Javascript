var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var a = parseInt(line.shift());
var b = parseInt(line.shift());

if(b%a==0 || a%b==0){
    console.log('Sao Multiplos');
    
}
else{
    console.log('Nao sao Multiplos');
    
}