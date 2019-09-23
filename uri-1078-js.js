var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var line = parseInt(line.shift());

for(var i=1;i<=10;i++){
    console.log(i + ' x ' + n + ' = '+i*n );
    
}