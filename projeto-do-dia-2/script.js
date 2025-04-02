idade = prompt("Quantos anos você tem?");
if (idade < 18) {
    alert("você NÃO pode jogar jokenpo");
}

//alert("Vamos começar a jogar!");

if (idade >= 18) {
    escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;


// Jogador Pedra, Computador Pedra --> empate
// Jogador Tesoura, Computador Tesoura --> empate
// Jogador Papel, Computador Papel --> empate

    if (escolhaJogador == escolhaComputador) {
        alert("empate!!");
    }

    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
        // Jogador Pedra, Computador Papel --> Computador vence
        alert("Computador venceu, computador papel!!");
        }
        if (escolhaComputador == 3) {
        // Jogador Pedra, Computador Tesoura --> Jogador vence
          alert("Jogador venceu, computador tesoura!!");
        }
    }

    if(escolhaJogador == 2) {
       if(escolhaComputador == 1) {
        // Jogador papel, Computador Pedra --> Jogador vence
          alert("Jogador venceu, computador pedra!!");
       }
       if(escolhaComputador == 3)  {
        // Jogador papel, Computador Tesoura --> Computador vence
          alert("Computador venceu, escolheu tesoura!!");
       }
    }

    if(escolhaComputador == 1) {
        // Jogador Tesoura, Computador Pedra --> Computador vence
        alert("Computador venceu, escolheu pedra!!");
    }
    if(escolhaComputador == 2) {
       // Jogador Tesoura, Computador Papel --> Jogador vence
       alert("Jogador venceu, computador papel!!"); 
    }

alert("A escolha do computador for: " + escolhaComputador);

}