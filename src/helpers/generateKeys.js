const CryptoJS = require('crypto-js');

const secretKey1 = CryptoJS.lib.WordArray.random(32).toString();
const secretKey2 = CryptoJS.lib.WordArray.random(32).toString();

console.log({ secretKey1, secretKey2 });
