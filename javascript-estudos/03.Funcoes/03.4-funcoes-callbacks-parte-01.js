
console.log("============Exempo 01 ==============")


const calculadora = (v1, v2, callback) => {
    return callback(v1, v2);
}

console.log(calculadora(2, 2, (v1, v2) => {
    return v1 + v2
}));

console.log(calculadora(2, 2, (v1, v2) => {
    return v1 * v2
}));

const subtrair = (v1, v2) => {
    return v1 - v2
}

console.log(calculadora(4, 2, subtrair));


console.log("============Exempo 02 ==============")

const f1 = (callback) => {
    setTimeout(() => {
        console.log("BUSCANDO O USUARIO - OK")
        if (callback) callback()
    }, 2000)
}

const f2 = (callback) => {

    setTimeout(() => {
        console.log("BUSCANDO O ENDEREÇO - OK")
        if (callback) callback()
    }, 800)
}

const f3 = (callback) => {
    setTimeout(() => {
        if (callback) callback()
    }, 500)
}

f1(() => {
    f2(() => {
        f3(() => {
            console.log("FIM !!!")
        })
    })
})

