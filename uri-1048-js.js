var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split(' ');

function salary( n, p)
{
    var final_salary,salary_incresed;
    final_salary=n+((n*p)/100 );
    salary_incresed=(n*p)/100;
    console.log('Novo salario: '+ final_salary.toFixed(2));
    
    //printf("Novo salario: %.2f\n",final_salary);
    console.log('Reajuste ganho: '+salary_incresed.toFixed(2));
    
}

var n=parseFloat(line.shift());
if(n> 0.00 && n<=400.00){
    salary(n,15);
    console.log('Em percentual: 15 %');
    
}
else  if(n> 400.00 && n<=800.00){
    salary(n,12);
    console.log('Em percentual: 12 %');
}
else  if(n> 800.00 && n<=1200.00){
    salary(n,10);
    console.log('Em percentual: 10 %');
    
}
else  if(n> 1200.00 && n<=2000.00){
    salary(n,7);
    console.log('Em percentual: 7 %');
    
}
else{
    salary(n,4);
    console.log('Em percentual: 4 %');
   
}