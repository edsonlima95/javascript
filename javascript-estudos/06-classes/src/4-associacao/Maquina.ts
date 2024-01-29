import { Ferramenta } from "./Ferramenta";



export class Maquina extends Ferramenta {

    constructor(name: string) {
        super(name);
    }



    escrever(): String {
        return `${this.getNome()} escrevendo...`
    }

}