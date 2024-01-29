
console.log("============Exempo 01 ==============")

/**
 * Funções aninhadas e o conceito de uma função chamar outras função e retornar um valor.
 */

//Exemplo 01

let result = 0

//Função que vai returnar outras função.

//1- recebe os valores
function somar(...values) {

    //2-função de dentro que vai receber os valores da função de fora.
    const sum = () => {

        //3-faz a iteração nos valores.
        for (let value of values) {
            result += value
        }

        //4-retorna o resultado dos valores iterados.
        return result

    }

    //5- passa os valores para a função de dentro, e retorna o resultado da função sum para a função de fora.
    return sum()

}

console.log(somar(1, 2, 3)) //Resultado 6


console.log("============Exempo 02 ==============")


// 1 - recebe dois valores
function addSquares(a, b) {

    //2- recebe um valor e multiplica por ele mesmo.
    function square(x) {
        return x * x;
    }
    
    /**3- passa o valor para a função de dentro e soma o resultado da primeira chamada que e a = 2*2 = 4 
     * e depois soma com b=3 = 3*3 = 9 reusultado 4 + 9 = 13
    * */
    return square(a) + square(b);
}
a = addSquares(2, 3); // retorna 13
b = addSquares(3, 4); // retorna 25
c = addSquares(4, 5); // retorna 41
console.log(a)
console.log(b)
console.log(c)


//Exemplo 03

console.log("============Exempo 03 ==============")

function A(x) {
   //console.log(y) A não tem acesso a y Erro.
   function B(y) {
      //console.log(x) B tem acesso a x pois as funcões internas podem acessar valores das externas ou acima delas.
      console.log(x)
      function C(z) {
         //C pode acessar tanto x como y
         console.log(x + y + z);
      }
      C(3);
   }
   B(2);
}
A(1);

console.log("============Exempo 04 ==============")


function fora() {
   var x = 10;
   function dentro(x) {
      return x;
   }
   return dentro;
}
result = fora()(20); //Quando a variavel tem o mesmo nome a precedencia é a da função interna.

console.log(result)




