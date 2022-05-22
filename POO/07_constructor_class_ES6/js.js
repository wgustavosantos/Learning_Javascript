class Pessoa {
    constructor(nome, idade, cpf) {

        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    encerrarSessao(){
        this.nome = undefined;
        this.idade = undefined;
        this.cpf = undefined;

        console.log(`Nome: ${this.nome} Idade: ${this.idade} CPF: ${this.cpf}`)
    }
}

Pessoa.prototype.acessarLogin = function (cpf) {
    if (this.cpf === cpf) {
        this.login = "gustavo" + this.idade;
        this.senha = this.cpf + this.idade;
        return "Login: " + this.login + " Senha: " + this.senha;
    } else
        console.log("PARAMETRO CPF INVALIDO")
}

Pessoa.prototype.gerarToken = function (login) {
    return "token123";
}

let p1 = new Pessoa("Gustavo", 24, "04407090243");

let login = p1.acessarLogin("04407090243");
let token = p1.gerarToken();

console.log(login);
console.log(token);
p1.encerrarSessao();