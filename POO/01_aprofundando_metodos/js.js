const cachorro = {
    
    nome: "",
    idade: "",

    latir: function() {
        console.log("Au au");
    },
    rosnar: function() {
        console.log("Rosnando");
    },
    dormr: function() {
        console.log("Dormindo");
    },

    setNome: function(nome) {
        this.nome = nome;
    },

    getNome:  function(){
        return this.nome;
    }
}
cachorro.latir();
cachorro.setNome("Aldalberto");
console.log(cachorro.getNome());