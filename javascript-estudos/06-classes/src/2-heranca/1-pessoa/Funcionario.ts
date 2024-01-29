import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {

    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        rg: string,
        private horasTrabalhadas: number) {

        //Chama o construtor da class pai
        super(nome, sobrenome, idade, cpf, rg);
    }

    get horas() {
        return this.horasTrabalhadas;
    }

    set horas(horas: number) {
        this.horasTrabalhadas = horas;
    }

    /**
     * Sobrescrevendo o metodo da classe pai.
     */
    getDomcumentos(): string {
        console.log("Metodo documentos de dentro de funcionario")
        return super.getDomcumentos(); //Chama o metodo da classe pai
    }

}

const funcionario = new Funcionario("joão", "lima", 50, "123.123.321-09", "200712383-9", 100);


funcionario.horas = 150

console.log(funcionario.horas)

console.log(funcionario.getCompleto())
console.log(funcionario.getDomcumentos())
