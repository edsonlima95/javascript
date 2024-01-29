import { Caneta } from "./Caneta";
import { Ferramenta } from "./Ferramenta";
import { Maquina } from "./Maquina";


export class Escritor {

    private ferramenta: Ferramenta | null = null;

    constructor(
        private _nome: string,
    ) { }

    get nome() {
        return this._nome
    }

    setFerramenta(ferramenta: Ferramenta): void {
        this.ferramenta = ferramenta;
    }

    escrever() {

        if (this.ferramenta === null) {
            console.log("Não posso escrever estou sem ferramenta.")
            return;
        }

        return this.ferramenta.escrever()

    }
}

const escritor = new Escritor('joão');

const caneta = new Caneta('Bic')

const maquina = new Maquina('Maquina')

escritor.setFerramenta(caneta);
escritor.setFerramenta(maquina);

console.log(escritor.escrever());