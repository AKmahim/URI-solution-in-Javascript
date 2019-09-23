var i,j,sum;
var x;

for(i=0;i<=1.9;i=i+0.2){
    for(j=1;j<=3;j++){
            sum=i+j;
        if(i==0.0 || i==1.0){
            console.log('I='+i.toFixed(0)+' J='+sum.toFixed(1));
            
            // printf("I=%.0lf J=%.0lf",i,sum);
        }
        else if(sum==3.0 || sum==4.0 || sum==5.0){
            console.log('I='+i.toFixed(0)+' J='+sum.toFixed(0));
        // printf("I=%.0lf J=%.0lf",i,sum);
       }
        else{
            console.log('I='+i.toFixed(1)+' J='+sum.toFixed(1));
            // printf("I=%.1lf J=%.1lf",i,sum);
        }
        printf("\n");
    }
}
for(x=3;x<=5;x++){
    console.log('I=2 J='+x);
    
    // printf("I=2 J=%d\n",x);
}