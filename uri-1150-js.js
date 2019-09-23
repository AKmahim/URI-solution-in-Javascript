var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var  n1,n2,sum,i,count=0;
    // scanf("%d",&n1);
    n1 = parseInt(line.shift());
    n2 = parseInt(line.shift());
    
    // scanf("%d",&n2);
    while(1){
        if(n2>n1){
            break;

        }
        else{
            // scanf("%d",&n2);
           n2 = parseInt(line.shift());

        }
    }
    sum=0;
    i=n1;
    while(sum<n2){
        sum=sum+i;
        i++;
        count++;
    }
    // printf("%d\n",count);
    console.log(count);
    