const num = Number(prompt('Digite um número:'))
const nroTitulo = document.getElementById('nro-titulo')
const texto = document.getElementById('texto')

nroTitulo.innerHTML = num
texto.innerHTML = `Raiz quadrade: ${num ** 0.5}<br />`
texto.innerHTML += `é inteiro: ${Number.isInteger(num)}<br />`
texto.innerHTML += `é NaN: ${Number.isNaN(num)}<br />`
texto.innerHTML += `Arredondando baixo: ${Math.floor(num)}<br />`
texto.innerHTML += `Arredondando cima: ${Math.ceil(num)}<br />`
texto.innerHTML += `com duas casas decimais.: ${num.toFixed(2)}<br />`
