var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');


var i,j,p=4,T,c=1;
    T=parseInt(line.shift());
    // scanf("%d",&T);
    for(i=1;i<=T;i++){
        var result1 = '';
        var result2 = '';
        for(j=c;j<=p;j++){
           

            if(j%4 ==0){
                
                 result2 += 'PUM';
            }
            else{
               
                result1 += j + ' ';
              
            }
        }
        console.log(result1 + result2);
           c=c+4;
           p=p+4;
           
    }