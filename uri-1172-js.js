var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,j;
var ara=[];

for(i=0;i<10;i++){
    // scanf("%d",&ara[i]);
    ara[i]=parseInt(line.shift());
}

for(i=0;i<10;i++){
    if(ara[i]<=0){
        ara[i]=1;
    }
}

for(j=0;j<10;j++){
    // printf("X[%d] = %d\n",j,ara[j]);
    console.log('X['+j+'] = '+ara[j]);
    
}