
/**
 * Polimorfismo é quando uma class PAI tem um metodo que faz determinda ação
 * e quando suas classes (Funções contrutoras neste caso) herdam esses metodos
 * ela pode modificar sua ação ou seu comportamento padrão.
 */

//Classe pai.
function Conta(agencia, conta) {

    this.agencia = agencia;
    this.conta = conta;
    this.saldo = 0;
}

//Adiciona os metodos ao prototype de Conta.
Conta.prototype.sacar = function (valor) {
    console.log("Você fez um saque de: " + valor)
    this.saldo -= valor;
    console.log(this.verSaldo());
}

Conta.prototype.depositar = function (valor) {

    console.log("Você fez um deposito de: " + valor)
    this.saldo += valor;
    console.log(this.verSaldo());
}

Conta.prototype.verSaldo = function () {
    return "Seu saldo atual é de: " + this.saldo

}

/**
 * Herança em funções construtoras chama o metodo call passando 
 * o objeto e as propriedades.
 */
function ContaCorrente(agencia, conta, limit) {
    Conta.call(this, agencia, conta); //Herda os atributos de Conta com o metodo CALL
    this.limit = limit;
}

/**Faz a lincagem de ContaCorrente com o prototype de Conta, assim 
contaCorrente passa a ter acesso aos metodos e atributos.
*/
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//Sobrescrevendo o metodo sacar adicionando o limit
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limit || valor < this.saldo) {

        console.log("Você fez um saque de sua conta corrente: " + valor)
        this.saldo -= valor;
        console.log(this.verSaldo());
    }
}

console.log("------------CONTA-----------------")

console.log()

const conta1 = new Conta(1234, 5678, 100);

conta1.depositar(10)
conta1.sacar(5)

console.log()

console.log("------------CONTA CORRENTE-----------------")

const conta2 = new ContaCorrente(4413, 5998, 100);

conta2.depositar(10)
conta2.sacar(150)

