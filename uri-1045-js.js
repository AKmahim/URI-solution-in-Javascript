var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var a =parseFloat(line.shift());
var b=parseFloat(line.shift());
var c= parseFloat(line.shift());

var sto,hi,lo;

if (a>b) {
    sto=a;
    lo=b;
 } else {
    sto=b;
    lo=a;
 }
 if (sto>c) {
    hi=sto;
    if(lo>c){
       sto=lo;
       lo=c;
    }else {
       sto=c;
    }
 }
 else hi=c;
//first line
if(hi >=(sto+lo)){
    console.log('NAO FORMA TRIANGULO');
    
}
else if(hi*hi ==((sto*sto)+(lo*lo)) ){
    console.log('TRIANGULO RETANGULO');
    
}
else if(hi*hi >((sto*sto)+(lo*lo))){
    console.log('TRIANGULO OBTUSANGULO');
    
}
else if(hi*hi < ((sto*sto)+(lo*lo))){
    console.log('TRIANGULO ACUTANGULO');
    
}

//second line

if( a==b || b==c || a==c) {
        if(a==b && b==c){
            console.log('TRIANGULO EQUILATERO');
            
        }
         else{
                console.log('TRIANGULO ISOSCELES');
                

      }

}
