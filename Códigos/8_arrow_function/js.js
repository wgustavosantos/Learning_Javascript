const arrowFunction = (n) => {
    return 2 * n;
};



const arrowFunction2 = () => {
    console.log("Dentro do escopo da arrow function.");
};

const arrowFunctionSimples = n => n * 2;


console.log(arrowFunction(2));
console.log(arrowFunction2());
console.log(arrowFunctionSimples(5));