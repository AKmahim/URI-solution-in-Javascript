var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

var  i,x,y,c=0;
    // scanf("%d %d",&x,&y);
    x = parseInt(line.shift());
    y = parseInt(line.shift());
    // console.log(x,y);
    
    var result = '';
    for(i=1;i<=y;i++){

        c++;
        if(c==x){
            result += i;
            // printf("%d",i);
        }
        else{
            result += i + ' ';

            // printf("%d ",i);

        }
        if(c==x){
            c=0;
            result += '\n'
        }
        
    }
    console.log(result);
    