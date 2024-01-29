/**
 * Tuple define os tipos e os valores predefinidos.
 */

const tuple01: [number, string] = [10, 'edson'] //Define numero e string
const tuple02: readonly [number, string, ...string[]] = [10, 'edson','nota','materia'] //Define numero e string e array de string
const tuple03: [number, string?] = [10] //Define numero e string opcional

console.log(tuple01[0] = 100)
console.log(tuple01[1] = 'pedro')
console.log(tuple02[2])
console.log(tuple03)