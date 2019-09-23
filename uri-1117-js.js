var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var c=0,r,n,s=0;
    while(1){
        if(c==2){
            break;
        }
        n = parseFloat(line.shift());
        // scanf("%lf",&n);
        if(n >=0 && n<=10){
            
            s=s+n;
            c++;
        }
        else{
            console.log('nota invalida');
            
            // printf("nota invalida\n");
        }

    }
     r=s/2.00;
     console.log('media = '+r.toFixed(2));
     
    // printf("media = %.2f\n",r);