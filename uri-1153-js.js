var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,f=1,n;
    // scanf("%d",&n);
    n = parseInt(line.shift());
    for(i=2;i<=n;i++){
        f=f*i;
    }
    // printf("%d\n",f);
    console.log(f);
    
