
function Produto(nome, price) {
    this.nome = nome;
    this.price = price;
}

Produto.prototype.aumento = function (valor) {
    return this.price += valor;
}

function Macarrao(nome, price, marca) {
    Produto.call(this, nome, price);
    this.marca = marca;
}

//Linkando o prototype de Produto para Macarrao.
Macarrao.prototype = Object.create(Produto.prototype);
Macarrao.prototype.constructor = Macarrao; //Setando o constructor para macarrao.

//INSTÂNCIA DOS OBJETOS

const macarrao = new Macarrao("macarrao", 10);

macarrao.aumento(100);
macarrao.marca = "massa boa";

console.log(macarrao);