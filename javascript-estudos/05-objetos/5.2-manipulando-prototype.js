
//Objeto A
const obj01 = {
    nome: 'edson',
    idade: 20,
    peso: 60,
}

//Objeto B
const obj02 = {
    email: 'edson@gmail.com',
    senha: '@33@#!@!@'
}

//Objeto C
const obj03 = {
    rua: 'vila uniao',
    bairro: 'Praça santo antonio'
}

/**
 * 1 - @param // Object.prototype que sera copiado
 * 2 - @param // Object que ira conter o prototype do objeto.
 */
Object.setPrototypeOf(obj02, obj01);


console.log("========OBJETO 02 ============")

console.log(obj01)

console.log("========OBJETO 02 ============")

//Obj02 agora tem acesso as propriedades de obj01.
obj02.idade = 100
console.log(obj02)


console.log("========OBJETO 03 ============")


Object.setPrototypeOf(obj03, obj02)

obj03.nome = 'pedro'
console.log(obj03.nome)

console.log("========OBJETO PRODUTO ============")

function Produto(nome, preco, stoque) {
    this.nome = nome
    this.preco = preco
    this.stoque = stoque
}

Produto.prototype.aumento = function (value) {
    return this.preco += value
}

const prod01 = new Produto("arroz", 3.00, 10)

const objProduto = {
    fabricante: 'maravilha'
}

Object.setPrototypeOf(objProduto, Produto.prototype)

console.log(prod01)
console.log(prod01.aumento(100))

objProduto.nome = "pilão"
objProduto.preco = 100
objProduto.stoque = 1000

console.log(objProduto.aumento(50))
console.log(objProduto)

