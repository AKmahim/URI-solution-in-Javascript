var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,j,n,temp;
    while(1){
        // scanf("%d",&n);
        n =parseInt(line.shift());
        if(n==0){
            break;
        }
        if(n%2==0){
            temp=0;
            for(i=0,j=n;i<5;i++,j=j+2){
                temp=temp+j;
            }
        }
        else{
            temp=0;
            for(i=0,j=n+1;i<5;i++,j=j+2){
                temp=temp+j;
            }
        }
        // printf("%d\n",temp);
        console.log(temp);
        

    }