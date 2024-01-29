/**
 * let - não pode ser redeclarada mas pode redefir seu valor, ela não pode ser acessada de dentro do escopo de bloco
 * IF SWITH etc.
 */


let nome =  "edson"; //let por deser acessada.
nome= "Pedro"

// let nome = 10  Error: let não pode ser redeclarada. sendo agora numerico.

{
    let telefone = "12345"
    console.log(nome) // let pode ser acessada dentro desse scopo.
}

//console.log("Telefone: " + telefone) Error: Telefone não pode ser acessada fora do scopo.

//==================================================//

function testandolet(numero){
    
    let idade = numero

    if(idade){
        let sexo = 10 
        console.log("Idade dentro do IF da função: "+idade)
    }
    
    console.log("Dentro da da função: "+idade)
    
    console.log("Imprimi nome de dentro da da função: "+nome)

   // console.log("Imprimi sexo de dentro da da função: "+sexo) Erro: sexo não poode ser acessada aqui.

    //console.log("Dentro da da função: "+sexo) Error: não pode ser acessada de dentro do bloco.

}

testandolet(10)

//console.log(idade) Error: Idade não pode ser acessada de fora do scopo da função.