var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n,sum=0,c,T,j,i;
    // scanf("%d",&T);
    T = parseInt(line.shift());
    for(j=1;j<=T;j++){

        // scanf("%d",&n);
        n=parseInt(line.shift());
         c=n/2;
        sum=0;
        for( i=1;i<=c;i++)
        {
            if(n%i==0){
                sum +=i;
            }

        }
        if(sum==n){
            // printf("%d eh perfeito\n",n);
            console.log(n+' eh perfeito');
            
        }
        else{
            // printf("%d nao eh perfeito\n",n);
            console.log(n+' nao eh perfeito');
            
        }
    }