var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var A,N,i,sum=0;
    // scanf("%d %d",&A,&N);
    A = parseInt(line.shift());
    N = parseInt(line.shift());
    while(N<=0){
        // scanf("%d",&N);
        N = parseInt(line.shift());
    }
    for(i=1;i<=N;i++){
        sum=sum+A;
        A++;

    }
    //sum++;
    // printf("%d\n",sum);
    console.log(sum);
    