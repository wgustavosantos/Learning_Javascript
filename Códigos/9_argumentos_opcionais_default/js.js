function argsOpc (idade, nome){
    
    if(nome === undefined){
        console.log("Olá, sua idade é: " + idade);
    }else {
        console.log("Olá, seu nome é " + nome + " e com " + idade + " anos.");
    }
}

function potencia(base, exp=2){

    return Math.pow(base, exp);
}

argsOpc(24);
argsOpc(24, "Gustavo");
console.log(potencia(3));
console.log(potencia(3, 3));

