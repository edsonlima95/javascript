

/**
 * Substitue um valor na string.
 */

const text = "Visit Microsoft!";
const result = text.replace("Microsoft", "W3Schools");

console.log(result);

const cpf = "047.615.653-06";
const resultCpf = cpf.replace(/[^0-9]/g,"");

console.log(resultCpf);