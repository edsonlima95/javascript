console.log("============Exempo 01 ==============")



const counter = (function (value) {

   let count = value

   return function (value) {
      //C tem acesso a valores da função externa.
      count += value
      return count;
   }

})(10)

console.log(counter(3)) // 13


console.log("============Exempo 03 ==============")


function retornaDados(nome) {

   return function(idade){
     return  `Nome: ${nome} e idade: ${idade}`
   }

}

const fanonima = retornaDados('Edson')
const f2anonima = retornaDados('João')
const f3anonima = retornaDados('Maria')

console.log(fanonima(20))
console.log(f2anonima(30))
console.log(f3anonima(45))



