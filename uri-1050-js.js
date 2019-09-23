var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n =parseInt(line.shift());

if(n==61){
    console.log('Brasilia');
    
    // printf("Brasilia\n");
}
else if(n==71){
    console.log('Salvador');

    // printf("Salvador\n");
}
else if(n==11){
    console.log('Sao Paulo');

    // printf("Sao Paulo\n");
}
else if(n==21){
    console.log('Rio de Janeiro');

    // printf("Rio de Janeiro\n");
}
else if(n==32){
    console.log('Juiz de Fora');

    // printf("Juiz de Fora\n");
}
else if(n==19){
    console.log('Campinas');

    // printf("Campinas\n");
}
else if(n==27){
    console.log('Vitoria');

    // printf("Vitoria\n");
}
else if(n==31){
    console.log('Belo Horizonte');

    // printf("Belo Horizonte\n");
}
else{
    console.log('DDD nao cadastrado');

    // printf("DDD nao cadastrado\n");
}