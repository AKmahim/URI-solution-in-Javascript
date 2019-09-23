var input = require('fs').readFileSync('/dev/stdin','utf8');
var line = input.split('\n');

// console.log(line);

// console.log(line[0]);
// console.log(line[1]);
// console.log(line[2]);

var name1=line[0];
var name2=line[1];
var name3=line[2];

// name1 = name1 +'\r';
// name2 = name2 + '\r';
if(name1 === "vertebrado"){

    if(name2 === "ave"){

        if(name3 === "carnivoro"){
            console.log('aguia');
            
            // printf("aguia\n");
        }
        else{
           console.log('pomba');
           
            // printf("pomba\n");
        }

    }
    else{
        if(name3 === "onivoro"){
            console.log('homem');
            
            // printf("homem\n");
        }
        else{
            console.log('vaca');
            
            // printf("vaca\n");
        }

    }
}
else{
    //scanf("%s",name2);
    if(name2 === "inseto"){
        //scanf("%s",name3);
        if(name3 === "hematofago"){
            console.log('pulga');
            
            // printf("pulga\n");
        }
        else{
            console.log('lagarta');
            
            // printf("lagarta\n");
        }

    }
    else{
        //scanf("%s",name3);
        if(name3 === "hematofago"){
            console.log('sanguessuga');
            
            // printf("sanguessuga\n");
        }
        else{
            console.log('minhoca');
            
            // printf("minhoca\n");
        }
    }
}