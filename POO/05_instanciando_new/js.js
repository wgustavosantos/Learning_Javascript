function Pessoa(nome, idade, cpf){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;

    this.acessarLogin = function (cpf){
        if(this.cpf === cpf){
            login = "gustavo" + this.idade;
            senha = this.cpf + idade;
            return "Login: " + login + " Senha: " + senha;
        }
    }
}

let p1 = new Pessoa("Gustavo", 24, "04407090243");

console.log(p1.acessarLogin("04407090243"));