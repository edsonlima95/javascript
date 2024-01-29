import { IPessoa } from "./IPessoa"

export class Pessoa implements IPessoa {

    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string,
        private rg: string,
    ) { }

    //GETTERs

     getCompleto() {
         return `NOME: ${this.nome} SOBRENOME: ${this.sobrenome} IDADE: ${this.idade}`;
     }
 
     getDomcumentos() {
         return `CPF: ${this.cpf} RG: ${this.rg}`;
     }

    //SETTERs

    setNome(nome: string) {
        this.nome = nome
    }

    setSobrenome(sobrenome: string) {
        this.sobrenome = sobrenome
    }

}

