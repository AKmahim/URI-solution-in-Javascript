var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var fibo=[];
//recursion function
function fib( n)
{
    if(fibo[n] != 0){
        return fibo[n];
    }
    if(n==1 || n==2){
        return fibo[n];
    }
    fibo[n]=fib(n-1) + fib(n-2);

    return fibo[n];

}

//main Work

    fibo[1]=1;
    fibo[2]=1;
    var n,T;
    // scanf("%d",&T);
    T=parseInt(line.shift());
    while(T--){

        // scanf("%d",&n);
        n=parseInt(line.shift());
        if(n==0){
            console.log('Fib(0) = 0');
            
            // printf("Fib(0) = 0\n");
        }
        else{
            console.log('Fib('+n+') = '+fib(n).toFixed(1));
            
            printf("Fib(%d) = %lld\n",n,fib(n));
        }


    }
