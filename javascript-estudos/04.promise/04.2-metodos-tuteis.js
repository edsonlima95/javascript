

function pessoa01() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                nome: 'Pedro',
                idade: 20
            });
        }, 1000);
    });
}

function pessoa02() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                nome: 'Maria',
                idade: 25
            });
        }, 800);
    });
}

/**
 * PROMISE ALL executa varias promise de uma vez e retorna o resultado de todas 
 * em um array.
 */

Promise.all([pessoa01(), pessoa02()], 'texto sera ignorado pois nao é uma promise').then(response => {
    console.log("RESPOSTA DO PROMISE ALL");
    console.log(response);
}).catch(err => {
    console.log(err);
})

/**
 * PROMISE RACE retorna a primeira promise a ser resolvida.
 */

Promise.race([pessoa01(), pessoa02()]).then(response => {
    console.log("RESPOSTA DO PROMISE RACE");
    console.log(response);
}).catch(err => {
    console.log(err);
})

/**
 * PROMISE RESOLVE, retorna um valor ja resolvida.
 */

const p1 = Promise.resolve({
    nome: 'Pedro',
    idade: 20
})

Promise.resolve({
    nome: 'Alan',
    idade: 20
}).then((response) => {
    console.log("RESPOSTA DO PROMISE RESOLVE 02");
    console.log(response);
})


p1.then((response) => {
    console.log("RESPOSTA DO PROMISE RESOLVE");
    console.log(response);
})



/**
 * PROMISE REJECT, retorna um error .
 */

const pe = Promise.reject({error: "deu ruim"})


pe.then((response) => {
}).catch((error) => {
    console.log("ERROR DO PROMISE REJECT");
    console.log(error);
})