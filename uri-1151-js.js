var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var  i,first,fibo,n,last;
    // scanf("%d",&n);
    n = parseInt(line.shift());
    // printf("0 1");
    var res = '0 1';
    last=1;
    first=0;
    for(i=0;i<n-2;i++){
        fibo=first+last;
        // printf(" %d",fibo);
        res += ' '+fibo;
        first=last;
        last=fibo;
        //first=last;
    }
    console.log(res);
    