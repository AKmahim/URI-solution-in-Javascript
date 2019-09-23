var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var a,b,sum,i;
    // scanf("%d",&a);
    a=parseInt(line.shift());
    b=parseInt(line.shift());
    // scanf("%d",&b);
    sum=0;
    if(a<b){
        for(i=a;i<=b;i++){
        if(i%13 !=0){
            sum=sum+i;
        }
    }
    console.log(sum);
    
    // printf("%d\n",sum);
    }
    else{
        for(i=b;i<=a;i++){
        if(i%13 !=0){
            sum=sum+i;
        }
    }
    console.log(sum);
    
    // printf("%d\n",sum);
    }