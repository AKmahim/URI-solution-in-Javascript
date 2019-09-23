var input = require('fs').readFileSync('input.txt','utf8');
var line = input.split(' ');

var x =parseFloat(line.shift());
var y = parseFloat(line.shift());

if(x>0 && y>0){
    console.log('Q1');
    
}
else if(x>0 && y<0){
    console.log('Q4');
   
}
else if(x<0 && y>0){
    console.log('Q2');
   
}
else if(x<0 && y<0){
    console.log('Q3');
   
}
else if(y==0){
    console.log('Eixo X');
    
}
else if(x==0){
    console.log('Eixo Y');
    
}
else if(x==0 && y==0){
    console.log('Origem');
    
}