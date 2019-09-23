var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

function prime( n)
{
    var i,root;
    if(n<2){
        return 0;
    }
    if(n==2){
        return 1;
    }
    if(n%2==0){
        return 0;
    }
    root = Math.sqrt(n);
    for(i=3;i<=root;i=i+2){
        if(n%i==0){
            return 0;
        }
    }
    return 1;
}

var n,T,i;
    // scanf("%d",&T);
    T=parseInt(line.shift());

    for(i=1;i<=T;i++){
        // scanf("%d",&n);
        n= parseInt(line.shift());
        if(prime(n)==1){
            console.log(n+' eh primo');
            
        // printf("%d eh primo\n",n);

       }
        else{
            console.log(n+' nao eh primo');
            
        // printf("%d nao eh primo\n",n);
       }
    }