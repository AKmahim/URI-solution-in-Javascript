var input = require('fs').readFileSync('/dev/stdin','utf8');
var sep = [' ','\n'];
var line = input.split(new RegExp (sep.join('|'),'g'));

var T,x,y,d;
T=parseInt(line.shift());

while(T--){
    // scanf("%d %d",&x,&y);
    x=parseInt(line.shift());
    y=parseInt(line.shift());
    if(y==0){
        // printf("divisao impossivel\n");
        console.log('divisao impossivel');
        
    }
    else{
            d=x/(y*1.00);
        // printf("%.1lf\n",d);
        console.log(d.toFixed(1));
        
    }
}