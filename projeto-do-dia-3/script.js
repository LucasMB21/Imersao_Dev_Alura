rodada = 1;
while(rodada <= 3) {
    console.log("Rodada:" + rodada);

    escolhaJogador = prompt("Nível "+rodada+", vidro (1,2 ou 3)?");
    pisoQuebrado = Math.floor(Math.random()*3) + 1;

    if(escolhaJogador == pisoQuebrado) {
        //escolheu o vidro que estava quebrado
        alert("Vidro quebrou! Acabou o jogo pra você");
        rodada = 1000;
    }

    else {
        alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
    }

    rodada = rodada + 1;
}

// veio para cá quando rodada >= 4

if(rodada == 4) {
    alert("Você venceu! parabéns");
}