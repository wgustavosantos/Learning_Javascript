const pessoa = {
    nome: "Gustavo ",
    isAdulto: true
}

console.log(Object.getPrototypeOf(pessoa));
console.log(pessoa.hasOwnProperty("nome"));

const pessoa1 = Object.create(pessoa);
pessoa1.nome = "Wenderson";

console.log(pessoa1.hasOwnProperty("nome")); /* verifica a propriedade do prototype origial/raiz */
console.log(pessoa1.nome);

console.log("O prototype de pesso1 é pessoa? " + (Object.getPrototypeOf(pessoa1) === pessoa));
