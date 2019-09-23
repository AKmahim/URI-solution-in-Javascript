var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var  i,n;
    // scanf("%d",&n);
    n = parseInt(line.shift());

    for(i=1;i<=n;i++){
        console.log(i+' '+i*i+' '+i*i*i);
        console.log(i+' '+((i*i)+1)+' '+((i*i*i)+1));
        
        // printf("%d %d %d\n",i,i*i,i*i*i);
        // printf("%d %d %d\n",i,i*i+1,i*i*i+1);
    }