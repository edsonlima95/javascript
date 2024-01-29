
/**
 * definaProperty - define uma propriedade e configura
 * enumerable - se pode ou não ser exibida.
 * value - valor da propriedade.
 * writable - se pode ou não ser redefinida seu valor.
 * configurable - se pode ou nao ser reconfigurada.
 */

function Produto(nome, preco, estoque) {

   /*  this.nome = nome;
    this.preco = preco; */

    /**
     * @param objeto
     * @param propriedade
     * @param objetoConfiguração
     */
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Exibe ou não
        value: estoque, //Recebe valor.
        writable: false, //Pode ou nao ser redefinida.
        configurable: true //Define se pode ou nao ser deletatada, reconfigurada e etc.
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Exibe ou não
            value: nome, //Recebe valor.
            writable: false, //Pode ou nao ser redefinida.
            configurable: true
        },
        preco: {
            enumerable: true, //Exibe ou não
            value: preco, //Recebe valor.
            writable: false, //Pode ou nao ser redefinida.
            configurable: true
        }
    })

}

const p1 = new Produto('Café', 4.50, 10)

p1.estoque = 100

console.log(p1)