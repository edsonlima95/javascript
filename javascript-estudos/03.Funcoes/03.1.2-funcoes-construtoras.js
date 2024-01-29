
/**
 * Função que atraves do new é transformada em objeto, diferente da funçao fabrica que 
 * retorna o objeto, a função construtora nao precisa retornar nada uma vez que 
 * ao ser chamada vem como obj.
 */


function Pessoa(nome, sobreNome, altura, peso) {

    this.nome = nome
    this.sobreNome = sobreNome
    this.altura = altura
    this.peso = peso


    this.nomeCompleto = function () {
        return `${this.nome} ${this.sobreNome}`
    }

    /**
     * Retorna os valores para peso e altura.
     */
    this.pesoAltura = function () {
        return `${this.peso} ${this.altura}`
    }

    /**
    * GET - transforma a função em atribute, podendo ser chamada apenas pelo nome 
    */
    this.imc = function () {
        const indice = this.peso / (this.altura ** 2)
        return indice.toFixed()
    }
}

console.log("============Exempo pessoa 01 ==============")

const p1 = new Pessoa("edson", "lima", 1.65, 57.00)
console.log(p1.nomeCompleto())
console.log(p1.pesoAltura())
console.log(p1.imc())

console.log(typeof p1)
