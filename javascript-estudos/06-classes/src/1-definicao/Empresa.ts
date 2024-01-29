import { Colaborador } from "./Colaborador"

export class Empresa {

    //Atributos da classe
    public readonly name: string
    private readonly cnpj: string
    protected readonly colaboradores: Colaborador[] = []

    //Construtor inicializa os atributos.
    constructor(name: string, cnpj: string) {
        this.name = name
        this.cnpj = cnpj
    }

    //Métodos
    
    adicionaColaborador(colaborador: Colaborador): this {
        this.colaboradores.push(colaborador)
        return this
    }

    getColaboradores(): Colaborador[] {
        return this.colaboradores
    }

}



const empresa = new Empresa('udemy', '11.111.111/0001-01')

const colaborador1 = new Colaborador('pedro', '123.123.123-09')
const colaborador2 = new Colaborador('maria', '111.111.111-11')

empresa.adicionaColaborador(colaborador1)
    .adicionaColaborador(colaborador2)

console.log(empresa.getColaboradores())