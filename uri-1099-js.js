var input = require('fs').readFileSync('/dev/stdin','utf8');
var sep = [' ','\n'];
var line = input.split(new RegExp (sep.join('|'),'g'));

var T =parseInt(line.shift());

var sum,low,high,x,y,i;
for(var j=1;j<=T;j++){
    x=parseInt(line.shift());
    y= parseInt(line.shift());

    if(x<y){
        low=x;
        high=y;

    }
    else{
        low=y;
        high=x;
    }
    sum=0;
    low=low+1;
    for(i=low;i<high;i++){
        if(i%2 !=0){
            sum=sum+i;
        }
    }
    console.log(sum);
    


}