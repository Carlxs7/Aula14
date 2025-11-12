var numberToFind = 0;
var attemps = 0;

function refresh() {
    // Gera um número aleatório

    numberToFind = parseInt(Math.random() * 10);

    console.log(numberToFind);
}

function verifyNumber() {

    var bet = document.getElementById("bet").value;

    if (bet > 100 || bet < 1) {
        alert('Aposta inválida!');
        return;
    }


    if (bet > numberToFind) {
        attemps++;
        alert('🚨O número é menor! Tente novamente.');
    }
    else if (bet < numberToFind) {
        attemps++;
        alert('🚨O número é maior! Tente novamente.');
    }
    else {
        alert('✅Parabéns! Você acertou o número em ' + attemps + ' tentativas.');
    }

}

refresh();