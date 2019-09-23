var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var T =parseInt(line.shift());
var inp=0;
var out=0;
var n;
for(i=1;i<=T;i++)
    {
        n=parseInt(line.shift());
        if(n>=10 && n<=20){
            inp++;
        }
        else{
            out++;
        }
        
    }
    console.log(inp + ' in\n' + out +' out');
    
    // printf("%d in\n%d out\n",in,out);