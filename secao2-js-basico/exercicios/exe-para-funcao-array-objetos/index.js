function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  let cont = 1
  function recebeEventoForm(evento) {
    evento.preventDefault()
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    }

    pessoas.push(pessoa)

    console.log(pessoas)
    resultado.innerHTML += `Nome: ${pessoa.nome}, Sobrenome: ${pessoa.sobrenome}, Peso: ${pessoa.peso}, Altura: ${pessoa.altura} <br />`
  }

  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()
