var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var n =parseFloat(line.shift());
if( n >=0.00 && n<=25.00){
    console.log('Intervalo [0,25]');

}
else if(n>25.00 && n<=50.00){
    console.log('Intervalo (25,50]');
    
}
else if(n>50.00 && n<=75.00){
    console.log('Intervalo (50,75]');
    
}
else if(n>75.00 && n<=100.00){
    console.log('Intervalo (75,100]');
    
}
else{
    console.log('Fora de intervalo');
    
}