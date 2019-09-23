var input = require('fs').readFileSync('/dev/stdin','utf8');
var line =input.split('\n');

var f =parseInt(line.shift());
var h =f;
var n,p;
for(var i=2;i<=100;i++){
    n=parseInt(line.shift());
    if(n>h){
        h=n;
        p=i;
    }
}
console.log(h);
console.log(p);

