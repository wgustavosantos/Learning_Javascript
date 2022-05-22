let animal = {
    nome: "",
    mamifero: "",

    setNome: function (nome) {
        this.nome = nome;
    },

    efeitoSonoro: function (nome) {

        if (nome === "cachorro")
            console.log("O " + this.nome + " late");
        else if (nome === "gato")
            console.log("O " + this.nome + " mia");
        else
            console.log("Não é cachorro e nem gato.");

    }
}

let RaboFino = Object.create(animal);

RaboFino.setNome("gato");
RaboFino.efeitoSonoro("gato");

