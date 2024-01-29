

export class Colaborador {

    /**
     * Passando os atributos como parametros direto no construtor
     * ele ja cria e inicializa (Metodo mais pratico) 
     */
    constructor(
        private readonly name: string,
        private readonly cpf: string,
    ) { }

}