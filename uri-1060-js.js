var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var ara=[];
for(var i=0;i<6;i++){
    ara[i]=parseFloat(line.shift());
}
var count=0;
for(var j=0;j<6;j++){
    if(ara[j]>0){
        count++;
    }
}
console.log(count+' valores positivos');
