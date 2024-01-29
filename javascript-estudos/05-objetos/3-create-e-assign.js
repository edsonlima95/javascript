
/**
 * O método Object.assign() é usado para copiar os valores de todas as propriedades próprias 
 * enumeráveis de um ou mais objetos de origem para um objeto destino. 
 * Este método irá retornar o objeto destino.
 * (...spread)
 */

console.log("============Exempo ASSIGN ==============")


const pessoa = {
    nome: 'Ana',
    idade: 20,
}

const pessoa2 = {
    email: 'email@gmail.com',
    matricula: 'matricula'
}

const pessoaCopia = Object.assign(pessoa2, pessoa, { cpf: '1234' })

console.log(pessoa)
console.log(pessoaCopia)


console.log("============Exempo CREATE ==============")

/**
 * O método Object.create() cria um novo objeto, 
 * utilizando um outro objeto existente como PROTOTYPE para o novo objeto a ser criado.
 */

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`Meu nome é ${this.name}. Eu sou humano? ${this.isHuman}`);
    }
};

const novaPessoa = Object.create(person);

novaPessoa.name = 'Edson'; // 
novaPessoa.isHuman = true; // Inherited properties can be overwritten

novaPessoa.printIntroduction();

//console.log(person.name) undefined - "name" e setada apenas em "novaPessoa", mas pessoa não.