var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,T;
var s,c;
T = parseInt(line.shift());

for(i=1;i<=T;i++){
    s=Math.pow(i,2).toFixed(0);
    c=Math.pow(i,3).toFixed(0);
    console.log(i + ' '+ s + ' '+ c);
    
    // printf("%d %.0lf %.0lf\n",i,s,c);
}