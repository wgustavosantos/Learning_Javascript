function Pessoa(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
}

Pessoa.prototype.acessarLogin = function (cpf) {
    if (this.cpf === cpf) {
        login = "gustavo" + this.idade;
        senha = this.cpf + this.idade;
        return "Login: " + login + " Senha: " + senha;
    } else
        console.log("PARAMETRO CPF INVALIDO")
}

Pessoa.prototype.gerarToken = function(login){
    return "token123";
}

let p1 = new Pessoa("Gustavo", 24, "04407090243");

let login = p1.acessarLogin();
let token = p1.gerarToken();

console.log(login);
console.log(token);