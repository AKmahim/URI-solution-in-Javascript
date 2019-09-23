var input = require('fs').readFileSync('/dev/stdin','utf8');
var sep = [' ','\n'];
var line = input.split(new RegExp (sep.join('|'),'g'));

var i,n1,n2,sum;
while(1){
    // scanf("%d %d",&n1,&n2);
    n1=parseInt(line.shift());
    n2=parseInt(line.shift());
    if(n1<=0 || n2<=0){
        break;
    }
    sum=0;
    // var res='';
    if(n1<n2){
        var res='';
        for(i=n1;i<=n2;i++){
        sum=sum+i;
        // printf("%d ",i);
        res += i+' ';

      }
      console.log(res + 'Sum=' + sum);
      
    // printf("Sum=%d\n",sum);
    // console.log('Sum=' + sum);
    
    }
    
    else{
        var res1='';
        for(i=n2;i<=n1;i++){
        sum=sum+i;
        // printf("%d ",i);
        res1 += i+' ';
    }
    console.log(res1 + 'Sum=' + sum);
    
    // printf("Sum=%d\n",sum);
    // console.log('Sum=' + sum);
    }
}