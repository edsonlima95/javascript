
/**
 * Extrai parte de uma string, e retorna uma nova string
 */

let text = "Hello world!";
let result = text.slice(0, 5);

console.log(result); //retorna tudo da posição 0 até a 5 - hello


let text2 = "Hello world !";
let result2 = text2.slice(5).trim()

console.log(result2); //retorna tudo da posição 5 pra frente - word!
