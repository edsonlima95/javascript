/**
 * Prototype no javascript é a cadeia de herança de objetos, todo objeto em js 
 * tem um prototype e pode herda prototypes de outros ojbetos.
 * podemos adicior propriedades e metodos nos prototype. 
 */

function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;

    //Esse metodo sera chamado ao inves do prototype.
    this.dadosDentroPessoa = function () {
        return `${this.nome} ${this.idade}`;
    }

}

Pessoa.prototype.dados = function () {
    return `Metodo do prototype`;
}


const p1 = new Pessoa("edson", 20)
// const p2 = new Pessoa("maria", 40)

console.dir(p1);
// console.dir(p2.dados())

