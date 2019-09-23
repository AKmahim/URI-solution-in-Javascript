var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var ara=[];
for(var i=0;i<5;i++){
    ara[i]=parseInt(line.shift());
}
// console.log(ara);

var e=0,o=0,p=0,ne=0;
for(var j=0;j<5;j++){
    if(ara[j]%2==0){
        e++;
    }
    if(ara[j]%2 !=0){
        o++;
    }
    if(ara[j] > 0){
        p++;
    }
    if(ara[j]<0){
        ne++;
    }
}

console.log( e+ ' valor(es) par(es)');
console.log(o + ' valor(es) impar(es)');
console.log( p+ ' valor(es) positivo(s)');
console.log( ne+ ' valor(es) negativo(s)');




