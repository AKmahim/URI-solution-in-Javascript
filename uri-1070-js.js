var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var n=parseInt(line.shift());
var i;
if(n%2==0){
    n=n+1;
    for( i=n;i<=n+11;i=i+2){
        console.log(i);
        
        // printf("%d\n",i);
   }
}
else{
    for(i=n;i<=n+11;i=i+2){
        console.log(i);

        // printf("%d\n",i);
   }
}