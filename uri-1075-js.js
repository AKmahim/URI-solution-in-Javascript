var input =require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n=parseInt(line.shift());

console.log('2');

for(var i=1;i<=10000;i++){
    if(i%n == 0){
        console.log(i+2);
        
    }
}