var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var x,y,low,high,i;
    x=parseInt(line.shift());
    y=parseInt(line.shift());

    // scanf("%d",&x);
    // scanf("%d",&y);
    if(x<y){
        low=x+1;
        high=y;
    }
    else{
        low=y+1;
        high=x;
    }
    for(i=low;i<high;i++){
        if(i%5 ==2 || i%5 ==3){
            console.log(i);
            
            // printf("%d\n",i);

        }
    }