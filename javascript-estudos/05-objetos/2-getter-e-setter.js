
/**
 * So podemos definir getter e setter  em funções construtoras 
 * usando o Oject.defineProperty e dentro dele definimos.
 */

function Pessoa(nome, idade) {

    // this.nome = nome;
    this.idade = idade;

    Object.defineProperty(this, "nome", {
        enumerable: true,
        configurable: true,

        get: function () {
            return nome;
        },

        set: function (valor) {
            nome = valor;
        },
    })

   /*  get: function () {
        return nome;
    }, Error */

}

const pessoa = new Pessoa('João', 25);

pessoa.nome = 'maria'
console.log(pessoa.nome)