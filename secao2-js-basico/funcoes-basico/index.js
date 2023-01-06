function saudacao(sNome) {
  console.log(`olá ${sNome} `)
}

function soma(x, y) {
  const resultado = x + y
  return resultado
}

const raiz = n => {
  return n ** 0.5
}

const raizAF = n => n ** 0.5

saudacao('João')
saudacao('Maria')

console.log(soma(3, 2))

console.log(raiz(9))
console.log(raizAF(9))
