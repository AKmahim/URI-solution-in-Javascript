//NOT solved

var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,n;
    while(1){
        // scanf("%d",&n);
        n = parseInt(line.shift());
        if(n==0){
            break;
        }
        var res='';
        for(i=1;i<=n;i++){
            // printf("%d",i);
            // console.log(i);
            res += i;
            
            if(i<n){
                // printf(" ");
                // console.log(' ');
                res += ' ';
                
            }
            
        }
        console.log(res);

        // console.log('\n');
        
    }