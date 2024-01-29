

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(0, 4);
const maskedNumber = last4Digits.padEnd(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "2034***************"