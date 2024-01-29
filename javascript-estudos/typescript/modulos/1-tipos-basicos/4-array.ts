
//Primeira forma de tipar Array<number>
function retornaNumero(...args: Array<number>): number {

    const result = args.reduce((acc, valor) => {
        return acc * valor;
    }, 1)

    return result

}

//Primeira forma de tipar string[]
function retornaString(...args: string[]): string {

    const result = args.reduce((acc, valor) => {
        return acc + ' ' + valor
    })

    return result

}

function caixaAlta(...args: string[]): string[] {

    return args.map(valor => valor.toLocaleUpperCase())
}


console.log(retornaNumero(1, 2, 3));
console.log(retornaString('a', 'b', 'c'));
console.log(caixaAlta('c', 'd', 'e'));