let num1 = 10
let num2 = 2.55569

// concatenar numeros
console.log(num1.toString() + num2)

// somar numeros
console.log(num1 + num2)

// numero binário quando passa o parametro 2 na function toString
console.log(num1.toString(2))

// para arredendar/fixar casas decimais passando o numero de casas como parametro
console.log(num2.toFixed(2))

// verificar se deu erro de not a number
console.log(Number.isNaN(num1 * 'oi'))

