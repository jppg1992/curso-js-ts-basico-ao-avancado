/*
* Aritméticos 
  + Adição / Concatenação
  - Subtração 
  / Divisão
   * multiplicação
  ** potenciação
  % resto divisão
*/

const num1 = 5
const num2 = 3
const num3 = '3'
const num4 = '5.10'

console.log(num1 + num2) // Adição
console.log(num1 + num3) // Concatenação quando um lado for string
console.log(num1 - num2) // Subtração
console.log(num1 / num2) // divisão
console.log(num1 * num2) // multiplicação
console.log(num1 ** num2) // potenciação
console.log(num1 % num2) // resto divisão

console.log(num1 * parseInt(num3));
console.log(num2 + parseFloat(num4));
console.log(typeof num4);

console.log(typeof num1);