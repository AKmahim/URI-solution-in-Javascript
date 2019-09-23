var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n=parseInt(line.shift());
for(var i=1;i<=n;i=i+2){
    console.log(i);
    
}