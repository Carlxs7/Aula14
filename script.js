var numberToFind = 0;
var attemps = 0;

function refresh() {
    // Gera um número aleatório entre 1 e 10
    numberToFind = parseInt(Math.random() * 10) + 1;
    console.log("Número gerado:", numberToFind);
}

function verifyNumber() {
    var bet = parseInt(document.getElementById("bet").value);

    if (bet > 10 || bet < 1 || isNaN(bet)) {
        alert('❌ Aposta inválida! Digite um número entre 1 e 10.');
        return;
    }

    if (bet > numberToFind) {
        attemps++;
        alert('🚨 O número é menor! Tente novamente.');
    } 
    else if (bet < numberToFind) {
        attemps++;
        alert('🚨 O número é maior! Tente novamente.');
    } 
    else {
        attemps++;
        alert('✅ Parabéns! Você acertou o número em ' + attemps + ' tentativas.');
        // Reinicia o jogo
        attemps = 0;
        refresh();
    }
}

refresh();
