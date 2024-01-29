

/**
 * O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto
 */

console.log("============Exempo KEYS ==============")


var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array com objeto
var obj = { nome: 'maria', sobrenome: 'silva', idade: 20 };
console.log(Object.keys(obj)); // console: ['nome', 'sobrenome', 'idade']


console.log("============Exempo VALUES ==============")


/**
 * O método Object.values() retorna um array de valores enumeraveis de um determinado objeto
 */

var empresa = { cargo: "chefe", nome: 'google' };
console.log(Object.values(empresa)); // [chefe, google]

// array como objeto
var alfabeto = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(alfabeto)); // ['a', 'b', 'c']
