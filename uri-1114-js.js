var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n ;
while(1){
    n=parseInt(line.shift());
    if(n==2002){
        console.log('Acesso Permitido');
        
        // printf("Acesso Permitido\n");
        break;
    }
    else{
        console.log('Senha Invalida');
        
        // printf("Senha Invalida\n");
    }
}