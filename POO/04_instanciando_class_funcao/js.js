function criaObjCachorro (cor, raca, idade){
    let cachorro = Object.create({});
    cachorro.cor = cor; //cria a prop cor no obj cachorro
    cachorro.raca = raca;
    cachorro.idade = idade;

    cachorro.latir = function (){ //criando um método da classe cachorro
        latido = "AU AU";
        return latido;
    }

    return cachorro;
}

let cachorro = criaObjCachorro('Preto', "Vira-lata", 18);

console.log(cachorro);