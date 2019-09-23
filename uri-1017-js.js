var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');


var n =parseInt(line.shift());
var devider=[100,50,20,10,5,2,1];
console.log(n);
var c;
for(var i=0;i<7;i++){
     c=n/devider[i];
     var count = parseInt(c);
    n=(n-(count*devider[i]));
    
    console.log(count + ' nota(s) de R$ ' + devider[i] + ',00');
    
}

