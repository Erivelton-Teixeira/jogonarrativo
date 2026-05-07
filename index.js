const prompt = require('prompt-sync')()
const colors = require('colors')
let pontos = 0
let inventario = []
let nome = ''

function iniciarJogo() {
  pontos = 0
  inventario = []
  nome = prompt('Qual o nome do seu hacker? ')
  console.log(`\nBem vindo, ${nome}! Boa sorte...`.cyan)
  encontroArquivo()
}

function sair() {
  console.log('Encerrando o jogo...')
  process.exit()
}

function menuPrincipal() {
  console.log('=== OPERAÇÃO SOMBRA ==='.cyan.bold)
  console.log('1. Jogar')
  console.log('2. Sair')
  let opcao = prompt('Escolha: ')
  switch (opcao) {
    case '1':
      iniciarJogo()
      break
    case '2':
      sair()
      break
  }
}

function gameOver() {
  console.log(`\n${nome} não chegou longe...`.red)
  console.log('1. Tentar novamente')
  console.log('2. Sair')
  let opcao = prompt('Escolha: ')
  if (opcao === '1') {
    pontos = 0
    menuPrincipal()
  } else {
    sair()
  }
}

function encontroArquivo() {
  console.log('\n=== CENA 1 ===')
  console.log(`${nome} encontra um arquivo misterioso no servidor...`)
  console.log('1. Abrir o arquivo')
  console.log('2. Ignorar e sair')
  console.log('3. Tentar a sorte')
  let opcao = prompt('O que ' + nome + ' faz? ')
  switch (opcao) {
    case '1':
      pontos++
      inventario.push('Arquivo Secreto')
      console.log(`${nome} abriu o arquivo! +1 ponto`)
      grupoSombra()
      break
    case '2':
      console.log(`Sem novidades, ${nome} ignora o arquivo...`)
      gameOver()
      break
    case '3':
      let sorte = Math.random() * 2
      if (sorte > 1) {
        pontos++
        console.log('Sorte! +1 ponto')
        grupoSombra()
      } else {
        pontos--
        console.log('Azar! -1 ponto')
        gameOver()
      }
      break
  }
}

function grupoSombra() {
  console.log('\n=== CENA 2 ===')
  console.log('Uma mensagem anônima aparece na tela de ' + nome + '...')
  console.log('1. Responder o contato')
  console.log('2. Ignorar')
  console.log('3. Esbarrar no teclado')
  let opcao = prompt('O que ' + nome + ' faz? ')
  switch (opcao) {
    case '1':
      pontos++
      inventario.push('Contato do Grupo Sombra')
      console.log(`${nome} respondeu a mensagem!!!`)
      encontro()
      break
    case '2':
      pontos--
      console.log(`${nome} ignorou a mensagem...`)
      tentarSozinho()
      break
    case '3':
      let sorte = Math.random() * 2
      if (sorte > 1) {
        console.log(`${nome} esbarrou no teclado e marcou um encontro!`)
        encontro()
      } else {
        console.log(`${nome} vai tentar sozinho...`)
        tentarSozinho()
      }
      break
  }
}

function encontro() {
  console.log('\n=== CENA 3 — O ENCONTRO ===')
  console.log(`${nome} chega ao local marcado...`)
  let sorte = Math.random() * 2
  if (sorte > 1) {
    console.log('O Grupo Sombra era confiável! +1 ponto')
    inventario.push('Pendrive do Grupo Sombra')
    pontos++
    hackeandoSistema()
  } else {
    console.log('Era uma armadilha!'.red.bold)
    console.log(`${nome} foi preso!`.red)
    pontos--
    gameOver()
  }
}

function hackeandoSistema() {
  console.log('\n=== CENA 4 — HACKEANDO A NASA ===')
  console.log(`${nome} precisa descobrir o código secreto (0 a 10)!`)
  let numeroSecreto = Math.floor(Math.random() * 11)
  let acertou = false
  for (let i = 0; i < 3; i++) {
    let tentativa = Number(prompt(`Tentativa ${i + 1}/3: `))
    if (tentativa === numeroSecreto) {
      acertou = true
      break
    } else {
      console.log(`Errou! Tentativas restantes: ${2 - i}`)
    }
  }
  if (acertou) {
    pontos++
    finalVitoria()
  } else {
    console.log(`Era ${numeroSecreto}! ${nome} foi detectado!`.red)
    gameOver()
  }
}

function tentarSozinho() {
  console.log('\n=== CAMINHO SOLO ===')
  console.log(`${nome} decide agir sozinho...`)
  let sorte = Math.random() * 2
  if (sorte > 1) {
    console.log(`${nome} encontrou uma pista escondida! +1 ponto`)
    pontos++
    hackeandoSistema()
  } else {
    console.log(`Sem apoio, ${nome} foi detectado!`.red)
    pontos--
    gameOver()
  }
}

function finalVitoria() {
  console.log('\n=== FIM — VITÓRIA! ==='.green.bold)
  console.log(`${nome} HACKEOU A NASA! 🎉`.green.bold)
  console.log(`Pontuação final: ${pontos}`)
  console.log(`Itens coletados: ${inventario.join(', ')}`)
  console.log('1. Jogar novamente')
  console.log('2. Sair')
  let opcao = prompt('Escolha: ')
  if (opcao === '1') {
    pontos = 0
    menuPrincipal()
  } else {
    sair()
  }
}

menuPrincipal()