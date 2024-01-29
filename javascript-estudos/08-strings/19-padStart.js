

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4); //Retorna os ultimos 4 digitos.
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');//Preenche com * ate atingir os 4 digitos

console.log(maskedNumber);
// Expected output: "************5581"