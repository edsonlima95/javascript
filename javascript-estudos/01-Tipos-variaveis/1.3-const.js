/**
 * const - não pode ser redeclarada nem redefinida, ela não pode ser acessada de dentro do escopo de bloco
 * IF SWITH etc.
 */


const nome =  "edson"; //const por deser acessada.
//const nome= "Pedro" Error: não pode ser redeclarada
//nome= "Pedro" Error: não pode ser redefinada seu valor

// const nome = 10  Error: const não pode ser redeclarada. sendo agora numerico.

{
    const telefone = "12345"
    console.log(nome) // const pode ser acessada dentro desse scopo.
}

//console.log("Telefone: " + telefone) Error: Telefone não pode ser acessada fora do scopo.

//==================================================//

function testandoconst(numero){
    
    const idade = numero

    if(idade){
        const sexo = 10 
        console.log("Idade dentro do IF da função: "+idade)
    }
    
    console.log("Dentro da função: "+idade)
    
    console.log("Imprimi nome de dentro da da função: "+nome)

    //console.log("Dentro da da função: "+sexo) Error: não pode ser acessada de dentro do bloco.

}

testandoconst(10)

//console.log(idade) Error: Idade não pode ser acessada de fora do scopo da função.