var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var start_h,start_m,end_h,end_m,d_h,d_m;

start_h=parseInt(line.shift());
start_m=parseInt(line.shift());
end_h=parseInt(line.shift());
end_m=parseInt(line.shift());

d_h=end_h-start_h;


    if(d_h<0){
        d_h=24+(end_h-start_h);
        //printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n",d_h,d_m);
    }
    d_m=end_m-start_m;
    if(d_m<0){
        d_m=60+(end_m-start_m);
        d_h--;
       // printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n",d_h,d_m);
    }

    if(start_h==end_h && start_m==end_m){
        console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
        
    }
    else{
        console.log('O JOGO DUROU '+d_h+' HORA(S) E '+d_m+' MINUTO(S)');
        
        // printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n",d_h,d_m);
    }