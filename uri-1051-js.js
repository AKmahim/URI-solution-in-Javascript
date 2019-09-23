var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var a = parseFloat(line.shift());
// var b;
// console.log(a);

if(a>=0 && a<=2000){
    console.log('Isento');
    
}
else if(a>=2000.01 && a<=3000){
    a =a-2000;
    var b=a*0.8;
    console.log('R$ '+ b.toFixed(2));
}
else if(a>=3000.01 && a<=4500){
    a =a-3000;
    var b1=a*0.18+80;
    console.log('R$ '+b1.toFixed(2));
}
else{
    a=a-4500;
    var b2= a*0.28+350;
    console.log('R$ '+b2.toFixed(2));
}