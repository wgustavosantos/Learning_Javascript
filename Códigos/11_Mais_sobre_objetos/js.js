let objeto1 = {
    chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3"
}

let arr = Object.keys(objeto1);

for (let index = 0; index < arr.length; index++) {

    if (arr[index] === "chave2") {
        console.log("Contém a chave!");
    }
}