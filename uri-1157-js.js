var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,n;
    // scanf("%d",&n);
    n = parseInt(line.shift());
    for(i=1;i<=n;i++){
        if(n%i==0){
            // printf("%d\n",i);
            console.log(i);
            
        }
    }