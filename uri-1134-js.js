var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n,a=0,d=0,g=0;
    while(1){
        n=parseInt(line.shift());
        // scanf("%d",&n);
        if(n==4){
            break;
        }
        if(n==1){
            a++;
        }
        else if(n==2){
            g++;
        }
        else if(n==3){
            d++;
        }
    }
    console.log('MUITO OBRIGADO');
    console.log('Alcool: '+a);
    console.log('Gasolina: '+g);
    console.log('Diesel: '+d);

    
    // printf("MUITO OBRIGADO\n");
    // printf("Alcool: %d\n",a);
    // printf("Gasolina: %d\n",g);
    // printf("Diesel: %d\n",d);