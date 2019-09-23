var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

var i,j;
    // int ara[20];
    // int new_ara[20];
    var ara=[];
    var new_ara=[];
    for(i=0;i<20;i++){
        // scanf("%d",&ara[i]);
        ara[i]=parseInt(line.shift());
    }

    for(i=0,j=19;i<20;i++,j--){
          new_ara[j]=ara[i];

    }
    for(j=0;j<20;j++){
        console.log('N['+j+'] = '+new_ara[j]);
        // printf("N[%d] = %d\n",j,new_ara[j]);
    }