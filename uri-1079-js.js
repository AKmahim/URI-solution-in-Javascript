var input = require('fs').readFileSync('/dev/stdin','utf8');
var sep = [' ','\n'];
var line = input.split(new RegExp (sep.join('|'),'g'));

var T =parseInt(line.shift());

var a,b,c,av;

for(var i=1;i<=T;i++){
    a=parseFloat(line.shift());
    b=parseFloat(line.shift());
    c=parseFloat(line.shift());
    av=((a*2)+(b*3)+(c*5))/10;
    console.log(av.toFixed(1));
    
}