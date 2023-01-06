function meuEscopo() {
  const form = document.querySelector('#form')

  function recebeEventoForm(evento) {
    evento.preventDefault()
    const pesoInput = form.querySelector('#peso')
    const alturaInput = form.querySelector('#altura')
    const peso = Number(pesoInput.value)
    const altura = Number(alturaInput.value)

    if (!peso) {
      setResultado(`Seu peso "${peso}" não é um número`, false)
      return
    }

    if (!altura) {
      setResultado(`Sua altura "${altura}" não é um numero`, false)
      return
    }

    const imc = getImc(peso, altura)

    const nivelImc = getNivelImc(imc)

    setResultado(`Seu IMC é: ${imc} (${nivelImc}).`, true)
  }

  form.addEventListener('submit', recebeEventoForm)

  function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
    if (isValid) {
      p.classList.add('p-resultado')
    } else {
      p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
  }

  function criaP() {
    const p = document.createElement('p')
    return p
  }

  function getImc(peso, altura) {
    const imc = peso / (altura * altura)
    return imc.toFixed(2)
  }

  function getNivelImc(imc) {
    let resposta
    if (imc < 18.5) {
      resposta = 'Abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
      resposta = 'Peso Normal'
    } else if (imc >= 25 && imc < 30) {
      resposta = 'Sobrepeso'
    } else if (imc >= 30 && imc < 35) {
      resposta = 'Obesidade grau 1'
    } else if (imc >= 35 && imc < 40) {
      resposta = 'Obesidade grau 2'
    } else if (imc >= 40) {
      resposta = 'Obesidade grau 3'
    }

    return resposta
  }
}
meuEscopo()
