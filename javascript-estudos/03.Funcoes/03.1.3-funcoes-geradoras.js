/**
 * Funcoes geradoras elas tem como principal objetivo exibix informações
 * apenas quando o for chamada pelo next.value.
 */

console.log("============Exempo geradora 01 ==============")

function* geradora01(){

    yield 1;
    yield 2;
    yield 3;

}

const g1 = geradora01();
console.log(g1.next().value) //Chama 1
console.log(g1.next().value) //Chama 2
console.log(g1.next().value) //Chama 3

console.log("============Exempo geradora 02 ==============")


function* geradora02(nome, sobrenome){

    yield nome;
    
    yield sobrenome;
    
    yield function (){
       console.log(`${nome} ${sobrenome}`)
    }

}

const g2 = geradora02('edson', 'lima');
console.log(g2.next().value) //Chama nome
console.log(g2.next().value) //Chama sobrenome
const exibir = (g2.next().value) //Chama a função
exibir()