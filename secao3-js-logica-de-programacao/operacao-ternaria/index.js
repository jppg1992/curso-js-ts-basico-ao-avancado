/**
 *  ? :
 *
 */

const pontuacaoUsuario = 1000
const NiveluserVIP = pontuacaoUsuario >= 1000 ? `Usuário VIP` : `Usuário normal`
const  corUsuario = null
const corPadrao = corUsuario || 'Preta'

if (pontuacaoUsuario >= 1000) {
  console.log(`Usuário VIP`)
} else {
  console.log(`Usuário normal`)
}

console.log( NiveluserVIP)
console.log(corPadrao)