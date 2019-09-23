var input  = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var T =parseInt(line.shift());
var ara=[];
    for(var j=0;j<T;j++){
        ara[j]=parseInt(line.shift());
    }
for(var i=0;i<T;i++){
    
    if(ara[i]%2==0 && ara[i]>0){
        console.log('EVEN POSITIVE');
        
        // printf("EVEN POSITIVE\n");
       }
    if(ara[i]%2==0 && ara[i]<0){
           console.log('EVEN NEGATIVE');
           
        // printf("EVEN NEGATIVE\n");
       }
    if(ara[i]%2 !=0 && ara[i]>0){
           console.log('ODD POSITIVE');
           
        // printf("ODD POSITIVE\n");
       }
    if(ara[i]%2 !=0 && ara[i]<0){
           console.log('ODD NEGATIVE');
           
        // printf("ODD NEGATIVE\n");
       }
    if(ara[i]==0){
           console.log('NULL');
           
        // printf("NULL\n");
       }
}