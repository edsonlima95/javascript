
/**
 * funções fabricas retorna um objeto e tem a finalidade de retornar dados de maneiras mais complexas
 * podendo retorna metodos, setar valores etc.
 */


function criaPessoa(nome, sobreNome, altura, peso) {

    return {
        nome,
        sobreNome,
        altura,
        peso,

        nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`
        },

        /**
         * SET - seta valores para as variaveis, sobrescreve os valores passados por parametro.
         */
        set pesoAltura(valor) {
            this.peso = valor.split(' ')[0]
            this.altura = valor.split(' ')[1]
        },

        /**
         * Retorna os valores para peso e altura.
         */
        get pesoAltura() {
            return `${this.peso} ${this.altura}`
        },

        /**
        * GET - transforma a função em um atributo, podendo ser chamada apenas pelo nome 
        */
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed()
        },

    }

}

console.log("============Exempo pessoa 01 ==============")

const p1 = criaPessoa("edson", "lima", 1.65, 57.00)
console.log(p1.nomeCompleto())

//USANDO O GET
//console.log(p1.imc()) //Error: por conta do GET a função nao e mais chamada com ()
console.log(p1.imc)

//USANDO O SET
p1.pesoAltura = '1.70 80'

console.log(p1.pesoAltura)

console.log("============Exempo pessoa 01 ==============")

const p2 = criaPessoa("joão", "alves", 1.80, 96.00)
console.log(p2.nomeCompleto())
console.log(p2.imc)
