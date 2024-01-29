import { Pessoa } from "../1-pessoa/Pessoa";
import { Conta } from "./Conta";


export class CC extends Conta {

    constructor(
        agencia: string,
        conta: string,
        pessoa: Pessoa
    ) {
        super(agencia, conta, pessoa)
    }

    //Sobrescrevi o metodo original
    depositar(valor: number): void {
        console.log("Deposito em conta corrente com 5% de acrescimo...")
        this.saldo += valor + (5 * valor / 100);
        console.log(this.mostrarSaldo())
    }

    sacar(valor: number): void {
        this.saldo -= valor;
        console.log(this.mostrarSaldo())
    }

    mostrarSaldo(): String {
        return `Seu saldo atual da conta: ${this.conta} = ${this.saldo}`
    }

    transferir(valor: number, conta: this): void {
        this.saldo -= valor;
        conta.saldo += valor;
        console.log(this.mostrarSaldo())
    }

}
console.log("-------------CONTA 01 -------------")

const p1 = new Pessoa("joão", "lima", 50, "123.123.321-09", "200712383-9");

const cc = new CC('1412', '012921-02', p1);

cc.depositar(100)


console.log("-------------CONTA 02 -------------")

const p2 = new Pessoa("maria", "araujo", 25, "000.000.000-11", "11111111-9");

const cc2 = new CC('0003', '12345-67', p2);

cc.transferir(100, cc2)

console.log(cc2.mostrarSaldo())

