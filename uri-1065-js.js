var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var ara=[];
for(var i=0;i<5;i++){
    ara[i]=parseInt(line.shift());
}
// console.log(ara);

var count=0;
// var sum=0;
for(var j=0;j<5;j++){
    if(ara[j]%2==0){
        count++;
        // sum=sum+ara[j];
    }
}
console.log(count+' valores pares');
// console.log((sum/count).toFixed(1));

