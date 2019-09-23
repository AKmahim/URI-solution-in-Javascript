var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var r,c,n;
var sum=0.0,avg;
var ch;
var ara= [[]];
// scanf("%d",&n);
n=parseInt(line.shift());
// scanf("%s",&ch);
// ch =line[0];
line.shift();
for(r=0;r<=11;r++){
    for(c=0;c<=11;c++){
        // scanf("%lf",&ara[r][c]);
        ara[r][c]=parseFloat(line.shift());
        if(r==n){
            sum=sum+ara[r][c];
        }
    }
}
if(ch=='S'){
    // printf("%.1lf\n",sum);
    console.log(sum.toFixed(1));
    
}
else if(ch=='M')
{
    avg=(sum/12.0).toFixed(1);
    // printf("%.1lf\n",avg);
    console.log(avg);
    
}
