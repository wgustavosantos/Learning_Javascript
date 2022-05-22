let cachorro = {
    nome: "Mel",
    idade: "8",
    raca: "indefinida",
    acao: function () {
        console.log("au au");
    }
};

let gato = {
    nome: "Rabo fino",
    idade: 1,
    raca: "indefinida"
}

let animal = {
    pelos: true,
    chifres: false,
    bicos: false,
    quadrupedes: "Não"
}


delete gato.raca;

gato.isVacinado = true;

gato.doido = "nao";

Object.assign(gato, animal);
console.log(gato);
console.log(cachorro.nome);
console.log(cachorro.acao());