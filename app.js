function monitoraEscolhaDoJogador() {
    let opcEscolhida = document.getElementById('comboEscolha').value;

    if (opcEscolhida == 'choose') {
        document.getElementById('imgJogador').src = "";
        return 0;
    }

    switch (opcEscolhida) {
        case 'rock':
            document.getElementById('imgJogador').src = "/images/pedra.png";
            break;
        case 'paper':
            document.getElementById('imgJogador').src = "/images/papel.png";
            break;
        case 'scissors':
            document.getElementById('imgJogador').src = "/images/tesoura.png";
            break;
    }
}

function sorteioDaJogadaDoPC() {
    const numeroSorteado = parseInt(Math.random() * (4 - 1) + 1)
    switch (numeroSorteado) {
        case 1:
            document.getElementById('imgPC').src = "/images/pedra.png";
            return 'rock'
        case 2:
            document.getElementById('imgPC').src = "/images/papel.png";
            return 'paper'
        case 3:
            document.getElementById('imgPC').src = "/images/tesoura.png";
            return 'scissors'
    }
}

function jogo() {
    const ValorPC = sorteioDaJogadaDoPC();
    const ValorJogador = document.getElementById('comboEscolha').value;
    if (ValorJogador == ValorPC) {
        alert('It´s a tie !');
    } else if (ValorJogador == 'rock' && ValorPC == 'scissors') {
        alert('You won !!!');
    } else if (ValorJogador == 'paper' && ValorPC == 'rock') {
        alert('You won !!!');
    } else if (ValorJogador == 'scissors' && ValorPC == 'paper') {
        alert('You won !!!');
    } else {
        alert('The PC won !');
    }
}

function reiniciaJogo() {
    document.getElementById('imgPC').src = '';
    document.getElementById('imgJogador').src = '';
    document.getElementById('comboEscolha').value = 'choose';
}

