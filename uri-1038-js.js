var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var c = parseInt(line.shift());
var n = parseInt(line.shift());

if(c==1){
    console.log('Total: R$ ' + (4.00*n).toFixed(2));
    
}
else if(c==2){
    console.log('Total: R$ ' + (4.50*n).toFixed(2));
}
else if(c==3){
    console.log('Total: R$ ' + (5.00*n).toFixed(2));
}
else if(c==4){
    console.log('Total: R$ ' + (2.00*n).toFixed(2));
}
else if(c==5){
    console.log('Total: R$ ' + (1.50*n).toFixed(2));
}