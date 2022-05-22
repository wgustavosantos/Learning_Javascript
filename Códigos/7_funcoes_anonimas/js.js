const funcao_anonima = function (){
    console.log("Testando função anonima");
}
function func(func) {
    console.log("Recebendo uma função no parametro de outra função.");
    console.log("O tipo é: " + typeof func);
    func();
}

// funcao_anonima();
// func(funcao_anonima);

(function (funcao_anonima, func_params){
    console.log("Chamando função logo apos ser criada");
    func_params(funcao_anonima);
})(funcao_anonima, func);
