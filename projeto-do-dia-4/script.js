//Preciso criar uma lista com os 3 jogadores
personagem = ["", "", ""];

viloes = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;
alert("O array Personagem contém: " + personagem);
for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + 1));
  personagem[i] = escolhaPersonagem;
  //Calcular a força de cada jogador, e depois somar pra saber a força do time
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
  // forcaPersonagem += Math.floor(Math.random() * 10 ) + 1 //Maneira mais avançada de fazer a mesma coisa
}
console.log("Agora o Array Personagem contém: " + personagem);

console.log("Início Vilões:"+ viloes);
for(let i=0; i<3; i++) {
   indiceAleatorio = Math.floor(Math.random() * 10);
   viloesPossiveis = ["Madara Uchiha", "Wilson Fisk", "Zabuza Momochi", "Majin Buu", "Thanos", "Freeza", "Cell", "Light Yagami", "Hidan", "Orochimaru"]
   viloes[i] = viloesPossiveis[indiceAleatorio];
   //Calcular a força de cada jogador do time do computador
   forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
}
console.log("Final Vilões:"+ viloes);

//Comparar os dois times para saber quem venceu.
if (forcaPersonagem > forcaViloes) {
   alert("Seu time é muito forte! Você ganhou a disputa de cabo de guerra! Sua força foi " + forcaPersonagem);
} else {
    if (forcaPersonagem < forcaViloes) {
      alert("Seu time é fraquinho. O computador ganhou o cabo de guerra com força de " + forcaViloes);
    } else {
       alert("Os dois times tem a mesma força! Vocês empataram!");
    }
}