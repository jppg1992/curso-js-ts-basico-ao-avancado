function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,

    fala() {
      console.log(`meu nome é ${this.nome}`)
    },

    incrementaIdade() {
      this.idade++
    }
  }
}

const pessoa1 = criaPessoa('João', 'Godinho', 25)

console.log(pessoa1.nome,pessoa1.idade)
pessoa1.incrementaIdade();
pessoa1.fala()

console.log(pessoa1.nome,pessoa1.idade)