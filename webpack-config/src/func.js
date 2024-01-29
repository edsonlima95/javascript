
const nomes = ["joao","maira","pedro"];

const pessoa = {
    ...nomes
}

function index() {
    return pessoa;
}

console.log(index());

const p = Promise.resolve("teste")

p.then(response => {
    console.log(response)
})
