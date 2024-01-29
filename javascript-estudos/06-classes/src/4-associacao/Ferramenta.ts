

export abstract class Ferramenta {

    constructor(private name: string) { }

    abstract escrever(): String

    getNome(): String {
        return this.name
    }

}