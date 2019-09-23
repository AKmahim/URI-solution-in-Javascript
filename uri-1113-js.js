var input = require('fs').readFileSync('/dev/stdin','utf8');
var sep = [' ','\n'];
var line = input.split(new RegExp (sep.join('|'),'g'));

var a,b;

while(1){
    // scanf("%d %d",&a,&b);
    a=parseInt(line.shift());
    b=parseInt(line.shift());
    if(a==b){
        break;
    }
    else{
            if(a<b)
            // printf("Crescente\n");
            console.log('Crescente');
            
        else
            // printf("Decrescente\n");
            console.log('Decrescente');
            

    }
}