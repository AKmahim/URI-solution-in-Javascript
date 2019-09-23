var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n,c=0,s=0;
    var av;
    while(1){
        // scanf("%d",&n);
        n = parseInt(line.shift());
        if(n<0){
            break;
        }
        s=s+n;
        c++;
    }
    av=(s/c).toFixed(2);
    // printf("%.2f\n",av);
    console.log(av);
    