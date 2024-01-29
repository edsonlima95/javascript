"use strict";

/**
 * VAR - pode ser redeclarada ou redefinida com novo tipo, ela pode ser acessada do escopo golbal e de bloco,
 * mas não pode ser acessada, do escopo da função.
 */


var nome =  "edson"; //Var pode ser acessada.

var nome=10 //Var pode ser redeclarada. sendo agora numerico.

var nome="Luiz" //Var agora volta a ser string.


{
    var telefone = "12345"
    console.log(nome) // Var pode ser acessada dentro desse scopo.
}

console.log("Telefone: " + telefone) //Telefone pode ser acessada for do scopo.

//==================================================//

function testandoVar(numero){
    var idade = numero

    if(idade){
        console.log("Idade dentro do IF da função: "+idade)
    }
    
    console.log("Dentro da da função: "+idade)

}

testandoVar(10)

//console.log(idade) Error: Idade não pode ser acessada de fora do scopo da função.




