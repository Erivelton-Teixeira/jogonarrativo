const prompt = require('prompt-sync')()
const colors = require('colors')
<<<<<<< HEAD

// Variáveis de estado do jogo
let nome = ''
let pontos = 0
let inventario = []

// ============================================================
// BANNERS
// ============================================================

function bannerInicio() {
  console.log('\n')
  console.log('#################################################'.cyan.bold)
  console.log('#                                               #'.cyan.bold)
  console.log('#          ██████  ██████  ███████ ██████       #'.cyan.bold)
  console.log('#         ██    ██ ██   ██ ██      ██   ██      #'.cyan.bold)
  console.log('#         ██    ██ ██████  █████   ██████       #'.cyan.bold)
  console.log('#         ██    ██ ██      ██      ██   ██      #'.cyan.bold)
  console.log('#          ██████  ██      ███████ ██   ██      #'.cyan.bold)
  console.log('#                                               #'.cyan.bold)
  console.log('#         *** OPERAÇÃO SOMBRA ***               #'.yellow.bold)
  console.log('#      Um hacker. Uma missão. Sem volta.        #'.white)
  console.log('#                                               #'.cyan.bold)
  console.log('#################################################'.cyan.bold)
  console.log('\n')
}

function bannerVitoria() {
  console.log('\n')
  console.log('*************************************************'.green.bold)
  console.log('*                                               *'.green.bold)
  console.log('*        !!! VITÓRIA: O MUNDO NUNCA            *'.green.bold)
  console.log('*            MAIS SERÁ O MESMO !!!             *'.green.bold)
  console.log('*                                               *'.green.bold)
  console.log('*    🛰️  MISSÃO CUMPRIDA — NASA HACKEADA! 🛰️     *'.yellow.bold)
  console.log('*   Os servidores mais seguros do mundo foram   *'.white)
  console.log('*   invadidos. O mundo nunca será o mesmo...    *'.white)
  console.log('*                                               *'.green.bold)
  console.log('*************************************************'.green.bold)
  console.log('\n')
}

function bannerDerrota() {
  console.log('\n')
  console.log('X'.repeat(42).red.bold)
  console.log('   GAME OVER: O PREÇO DA CURIOSIDADE   '.red.bold)
  console.log('X'.repeat(42).red.bold)
  console.log('\n' + 'TRACE COMPLETE. AUTHORITIES NOTIFIED.'.bgRed.white)
  console.log('\n')
}

function bannerParte2() {
  console.log('\n')
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.magenta.bold)
  console.log('~                                               ~'.magenta.bold)
  console.log('~      DESBLOQUEIO: CAPÍTULO 2 - A FUGA        ~'.yellow.bold)
  console.log('~           *** A PERSEGUIÇÃO ***               ~'.yellow.bold)
  console.log('~                                               ~'.magenta.bold)
  console.log('~   Depois de hackear a NASA, o governo está    ~'.white)
  console.log('~   na sua cola. Agentes da CIA, FBI e NSA      ~'.white)
  console.log('~   foram mobilizados. Você tem 48 horas        ~'.white)
  console.log('~   para desaparecer... ou será encontrado.     ~'.white)
  console.log('~                                               ~'.magenta.bold)
  console.log('~        Fuja. Esconda-se. Sobreviva.           ~'.yellow.bold)
  console.log('~            (EM DESENVOLVIMENTO)               ~'.yellow.italic)
  console.log('~                                               ~'.magenta.bold)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.magenta.bold)
  console.log('\n')
}

// ============================================================
// MENU E CONTROLE
// ============================================================

function menuPrincipal() {
  bannerInicio()
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

=======
let pontos = 0
let inventario = []
let nome = ''

>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
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
<<<<<<< HEAD
}

function gameOver() {
  bannerDerrota()
  console.log(`${nome} foi levado para uma sala sem janelas. O estágio acabou.`)
  console.log('\n1. Tentar novamente')
=======
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
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
  console.log('2. Sair')
  let opcao = prompt('Escolha: ')
  if (opcao === '1') {
    pontos = 0
    menuPrincipal()
  } else {
    sair()
  }
}

<<<<<<< HEAD
// ============================================================
// CENAS
// ============================================================

function encontroArquivo() {
  console.log('\n' + '=== CENA 1: O DESLIZE NO SERVIDOR ==='.bold.cyan)
  console.log(`Enquanto limpava diretórios antigos, ${nome.yellow} encontra o arquivo '_voyager_internal_leak.dat'.`)
  console.log('O ícone pisca em ' + 'verde neon'.green + ' e a data de modificação é de... ' + 'AGORA'.bold.red + '.')
  console.log('\n1. Abrir o arquivo ' + '(A curiosidade é maior que o medo)'.italic)
  console.log('2. Ignorar e sair ' + '(Escolher a mediocridade)'.italic)
  console.log('3. Tentar a sorte ' + '(Fechar os olhos e apertar Enter)'.italic)

  let opcao = prompt('O que você faz? ')
=======
function encontroArquivo() {
  console.log('\n=== CENA 1 ===')
  console.log(`${nome} encontra um arquivo misterioso no servidor...`)
  console.log('1. Abrir o arquivo')
  console.log('2. Ignorar e sair')
  console.log('3. Tentar a sorte')
  let opcao = prompt('O que ' + nome + ' faz? ')
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
  switch (opcao) {
    case '1':
      pontos++
      inventario.push('Arquivo Secreto')
<<<<<<< HEAD
      console.log(`\n${nome} executou o comando 'cat'. A tela rola com segredos da NASA! `.green + '+1 ponto'.bold.green)
      grupoSombra()
      break
    case '2':
      console.log(`\nVocê desliga o monitor, mas sente olhos nas suas costas. Seu estágio acabou aqui.`.red)
      gameOver()
      break
    case '3':
      if (Math.random() * 2 > 1) {
        pontos++
        console.log('\nSorte! '.green.bold + 'O script de segurança falhou e o arquivo abriu sozinho! ' + '+1 ponto'.green)
        grupoSombra()
      } else {
        pontos--
        console.log('\nAzar! '.red.bold + 'O alarme do CPD começou a tocar alto demais!')
=======
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
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
        gameOver()
      }
      break
  }
}

function grupoSombra() {
<<<<<<< HEAD
  console.log('\n' + '=== CENA 2: O GRUPO SOMBRA ==='.bold.cyan)
  console.log('O cursor se move sozinho: ' + '"Vimos o que você achou. A NASA está vindo. Quer ajuda?"'.green.italic)
  console.log('\n1. Responder o contato ' + '("Quem são vocês?")'.italic)
  console.log('2. Ignorar ' + '(Puxar o cabo da rede e tentar sozinho)'.italic)
  console.log('3. Esbarrar no teclado ' + '(Pânico total)'.italic)

  let opcao = prompt('Qual sua resposta? ')
=======
  console.log('\n=== CENA 2 ===')
  console.log('Uma mensagem anônima aparece na tela de ' + nome + '...')
  console.log('1. Responder o contato')
  console.log('2. Ignorar')
  console.log('3. Esbarrar no teclado')
  let opcao = prompt('O que ' + nome + ' faz? ')
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
  switch (opcao) {
    case '1':
      pontos++
      inventario.push('Contato do Grupo Sombra')
<<<<<<< HEAD
      console.log(`\n"Amigos do progresso,"`.cyan + ` eles dizem. ` + `"Vá até o fliperama abandonado. AGORA!"`.bold)
=======
      console.log(`${nome} respondeu a mensagem!!!`)
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
      encontro()
      break
    case '2':
      pontos--
<<<<<<< HEAD
      console.log(`\nVocê decide que não confia em estranhos. O silêncio no escritório é assustador.`.gray)
      tentarSozinho()
      break
    case '3':
      if (Math.random() * 2 > 1) {
        console.log(`\nNo susto, você envia um emoji de 'joinha'. Eles riem: ` + `"Gostamos do seu estilo. Nos encontre!"`.green)
        encontro()
      } else {
        console.log(`\nVocê derruba café no servidor. Agora o sistema está instável e você está só.`.red)
=======
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
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
        tentarSozinho()
      }
      break
  }
}

function encontro() {
<<<<<<< HEAD
  console.log('\n' + '=== CENA 3: O ENCONTRO NO FLIPERAMA ==='.bold.cyan)
  console.log(`${nome} entra na loja abandonada. O cheiro de ozônio é forte. Figuras encapuzadas se aproximam...`)

  if (Math.random() * 2 > 1) {
    console.log('\nO Grupo Sombra é real! Eles te entregam um pendrive de titânio. '.green + '+1 ponto'.bold.green)
=======
  console.log('\n=== CENA 3 — O ENCONTRO ===')
  console.log(`${nome} chega ao local marcado...`)
  let sorte = Math.random() * 2
  if (sorte > 1) {
    console.log('O Grupo Sombra era confiável! +1 ponto')
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
    inventario.push('Pendrive do Grupo Sombra')
    pontos++
    hackeandoSistema()
  } else {
<<<<<<< HEAD
    console.log('\nERRO: AS LUZES SE ACENDEM! '.red.bold + 'Não são hackers, é a Polícia Federal!')
=======
    console.log('Era uma armadilha!'.red.bold)
    console.log(`${nome} foi preso!`.red)
    pontos--
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
    gameOver()
  }
}

<<<<<<< HEAD
function tentarSozinho() {
  console.log('\n' + '=== CAMINHO SOLO: O LOBO SOLITÁRIO ==='.bold.yellow)
  console.log(`${nome} se esconde no porão com um script de 'brute-force' caseiro.`)

  if (Math.random() * 2 > 1) {
    console.log('\nIncrível! '.green + 'Você achou uma "backdoor" deixada por um estagiário dos anos 90! ' + '+1 ponto'.green)
    pontos++
    hackeandoSistema()
  } else {
    console.log('\nUm alerta vermelho pisca: ' + '"IP RASTREADO"'.red.bold + '. Você foi cercado antes do primeiro comando.')
    gameOver()
  }
}

function hackeandoSistema() {
  console.log('\n' + '=== CENA 4: DENTRO DO MAINFRAME DA NASA ==='.bold.magenta)
  console.log('As sirenes estão próximas. O sistema pede o ' + 'Protocolo de Emergência (149 a 151)'.bold + '!')

  let numeroSecreto = 151
  let acertou = false

  for (let i = 0; i < 3; i++) {
    let tentativa = Number(prompt(`Tentativa ${i + 1}/3 - Digite o código (0-151): `))
=======
function hackeandoSistema() {
  console.log('\n=== CENA 4 — HACKEANDO A NASA ===')
  console.log(`${nome} precisa descobrir o código secreto (0 a 10)!`)
  let numeroSecreto = Math.floor(Math.random() * 11)
  let acertou = false
  for (let i = 0; i < 3; i++) {
    let tentativa = Number(prompt(`Tentativa ${i + 1}/3: `))
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
    if (tentativa === numeroSecreto) {
      acertou = true
      break
    } else {
<<<<<<< HEAD
      console.log('ACESSO NEGADO! '.red + `Tentativas restantes: ${2 - i}`)
    }
  }

=======
      console.log(`Errou! Tentativas restantes: ${2 - i}`)
    }
  }
>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
  if (acertou) {
    pontos++
    finalVitoria()
  } else {
<<<<<<< HEAD
    console.log(`\nO código era ${numeroSecreto}. `.red + 'O mainframe fritou seu modem!'.bold.red)
    gameOver()
  }
}

// ============================================================
// FINAL
// ============================================================

function finalVitoria() {
  bannerVitoria()
  console.log(`Com o ` + `${inventario.join(' e ')}`.cyan + `, a NASA ficou no escuro.`)
  console.log(`Pontuação final: ` + `${pontos}`.green.bold + ` | Status: ` + `MAIS PROCURADO DO MUNDO`.red.bold)
  console.log(`\nAs viaturas estão no bloco A. ${nome} pega a mochila e pula a janela...`)
  bannerParte2()
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

// ============================================================
// INICIA O JOGO
// ============================================================

=======
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

>>>>>>> 14532efe457b9eea351c9f73597cdc2b8284d97a
menuPrincipal()