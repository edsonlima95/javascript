import { Pessoa } from "../1-pessoa/Pessoa";

export abstract class Conta {

    protected saldo: number = 0

    constructor(
        protected agencia: string,
        protected conta: string,
        protected pessoa: Pessoa,
    ) { }

    abstract depositar(valor: number): void

    abstract sacar(valor: number): void

    abstract mostrarSaldo(): String

    abstract transferir(valor: number, conta: Conta): void


    getPessoa(): String {
        return this.pessoa.getCompleto()
    }

}