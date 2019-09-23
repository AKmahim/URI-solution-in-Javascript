var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var ara=[];
for(var i=0;i<6;i++){
    ara[i]=parseFloat(line.shift());
}
// console.log(ara);

var count=0;
var sum=0;
for(var j=0;j<6;j++){
    if(ara[j]>0){
        count++;
        sum=sum+ara[j];
    }
}
console.log(count+' valores positivos');
console.log((sum/count).toFixed(1));

