const nros = [1, 2, 3, 4, 5, 6]
const alunos = ['Luiz', 'Maria', 'João', 'José', 'Tião']

console.log(alunos, nros)

alunos[0] = 'Eduardinho'

console.log(alunos)

alunos[alunos.length] = 'Luiz' // adicionar novo valor em um indice novo

alunos.push('Roberto') //push adiciona no fim do array
alunos.unshift('Luizinha') //unshift adiciona no inicio do array

console.log(alunos)

const removido = alunos.pop() // remove o último indice do array

console.log(removido)
console.log(alunos)

const removido2 = alunos.shift() // remove o primeiro indice do array

console.log(removido2)
console.log(alunos)

delete alunos[1] // apaga o valor do indice 1
console.log(alunos)

