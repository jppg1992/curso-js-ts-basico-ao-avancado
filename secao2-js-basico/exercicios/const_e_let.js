const nome = 'João Paulo'
const sobrenome = 'Godinho'
const idade = 30
const peso = 58
const alturaEmMt = 1.75

let imc = peso / (alturaEmMt * alturaEmMt)
let anoNascimento = 2022 - idade

console.log(`${nome}  ${sobrenome}  tem  ${idade}  anos, pesa ${peso}KG`)
console.log(`tem ${alturaEmMt} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
