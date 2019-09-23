var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var a= parseInt(line.shift());
var b = parseInt(line.shift());
var a,b,s,l,i;

if(a<b){
    s=a;
    l=b;
}
else{
    s=b;
    l=a;
}
var sum=0;
if(s%2==0){
    s++;
    for(i=s;i<l;i=i+2){
        sum=sum+i;
    }

}
else{
        s=s+2;
    for(i=s;i<l;i=i+2){
        sum=sum+i;
    }
}
console.log(sum);

