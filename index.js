const prompt = require('prompt-sync')()
const colors = require('colors')

let pontos = 0

// ================= INTRO =================
function introducao() {
    console.log("\n====================================".cyan)
    console.log("     OPERAÇÃO SOMBRA 🕵️".cyan)
    console.log("====================================\n".cyan)

    console.log("Em um mundo onde dados valem mais que dinheiro...".yellow)
    console.log("Jorgin é apenas um estagiário...")
    console.log("Mas hoje tudo muda...\n")

    console.log('"Você viu demais..."'.red)
    console.log('"Não confie em ninguém..."'.yellow)

    console.log("\nUm grupo chamado SOMBRA entrou em contato...\n".cyan)
}

// ================= MENU =================
function menuPrincipal() {
    console.log('\n=== MENU PRINCIPAL ==='.cyan)
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

// ================= INICIAR =================
function iniciarJogo() {
    pontos = 0
    introducao()
    encontroArquivo()
}

// ================= SAIR =================
function sair() {
    console.log("Encerrando o jogo...".red)
    process.exit()
}

// ================= GAME OVER =================
function gameOver() {
    console.log("\n💀 Jorgin foi capturado!".red)
    console.log("1. Tentar novamente")
    console.log("2. Sair")

    let opcao = prompt("Escolha: ")

    if (opcao === '1') {
        pontos = 0
        menuPrincipal()
    } else {
        sair()
    }
}

// ================= CENA 1 =================
function encontroArquivo() {
    console.log("\n=== CENA 1 ===".cyan)
    console.log("Arquivo misterioso encontrado...")

    console.log("1. Abrir")
    console.log("2. Ignorar")
    console.log("3. Tentar sorte")

    let opcao = prompt("Escolha: ")

    switch (opcao) {
        case '1':
            pontos++
            console.log("✅ Arquivo aberto! +1 ponto".green)
            grupoSombra()
            break

        case '2':
            console.log("❌ Você ignorou tudo".red)
            gameOver()
            break

        case '3':
            let sorte = Math.random() * 2
            if (sorte > 1) {
                pontos++
                console.log("🍀 Sorte! +1 ponto".green)
                grupoSombra()
            } else {
                pontos--
                console.log("💀 Azar!".red)
                gameOver()
            }
            break
    }
}

// ================= CENA 2 =================
function grupoSombra() {
    console.log("\n=== CENA 2 ===".cyan)

    console.log("1. Responder")
    console.log("2. Ignorar")
    console.log("3. Esbarrar no teclado")

    let opcao = prompt("Escolha: ")

    switch (opcao) {
        case '1':
            pontos++
            console.log("✅ Contato feito".green)
            encontro()
            break

        case '2':
            pontos--
            console.log("❌ Ignorou...".red)
            tentarSozinho()
            break

        case '3':
            let sorte = Math.random() * 2
            if (sorte > 1) {
                console.log("📞 Encontro marcado".yellow)
                encontro()
            } else {
                console.log("⚠️ Indo sozinho...".yellow)
                tentarSozinho()
            }
            break
    }
}

// ================= CENA 3 =================
function encontro() {
    console.log("\n=== ENCONTRO ===".cyan)

    let sorte = Math.random() * 2

    if (sorte > 1) {
        console.log("✅ Não era armadilha!".green)
        hackeando()
    } else {
        console.log("💀 Era uma armadilha!".red)
        gameOver()
    }
}

// ================= MINIGAME (151 FIXO) =================
function hackeando() {
    console.log("\n=== HACKEANDO A NASA ===".cyan)
    console.log("🔐 Descubra o código secreto...".yellow)

    let numeroSecreto = 151
    let acertou = false

    for (let i = 0; i < 3; i++) {
        let tentativa = Number(prompt("Digite o código: "))

        if (tentativa === numeroSecreto) {
            console.log("✅ ACESSO LIBERADO!".green)
            acertou = true
            break
        } 
        else if (tentativa > numeroSecreto) {
            console.log("📉 Muito alto!".yellow)
        } 
        else {
            console.log("📈 Muito baixo!".yellow)
        }
    }

    if (acertou) {
        finalVitoria()
    } else {
        console.log("🚨 Acesso negado!".red)
        gameOver()
    }
}

// ================= SOLO =================
function tentarSozinho() {
    console.log("\n=== TENTANDO SOZINHO ===".cyan)
    console.log("💀 Sistema detectou invasão!".red)
    gameOver()
}

// ================= FINAL =================
function finalVitoria() {
    console.log("\n🎉 FINAL".green)
    console.log("Você hackeou a NASA!\n".green)

    console.log(("Pontuação: " + pontos).yellow)

    if (pontos >= 3) {
        console.log("🔥 ACESSO LIBERADO".green)
        console.log("Você desbloqueou a OPERAÇÃO SOMBRA 2.0!".yellow)
    } else {
        console.log("⚠️ Você conseguiu, mas não desbloqueou o nível 2.0".yellow)
    }

    console.log("\nFim de jogo.".cyan)
}

// ================= START =================
menuPrincipal()