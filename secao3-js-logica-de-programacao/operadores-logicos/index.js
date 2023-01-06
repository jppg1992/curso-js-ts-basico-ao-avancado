/**
 * Operadores Lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 *
 *
 * FALSY VALUES
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 *
 *
 */

// exemplos seta corPadrao = corUsuario ou (corUsuario = false) 'valorPadrão'
const corUsuario = '' // corUsuario = '' é um FALSY value então retorna false
const corPadrao = corUsuario || 'preto'
console.log(corPadrao)

const corUsuario2 = 'vermelho' // corUsuario = 'vermelho' não é um FALSY value então retorna true
const corPadrao2 = corUsuario2 || 'preto'
console.log(corPadrao)
