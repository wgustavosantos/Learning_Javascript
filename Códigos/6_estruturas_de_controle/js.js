let cont;

for (let index = 0; index < 10; index++) {
    
    if(index == 5){
        continue;
    }else{
        break;
    }
    console.log(`contador: ${(index+1)}`);
}