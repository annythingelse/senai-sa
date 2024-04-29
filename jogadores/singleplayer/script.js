let chute;
let facil = Math.floor(Math.random() * 20) + 1;
let medio = Math.floor(Math.random() * 50) + 1;
let dificil = Math.floor(Math.random() * 100) + 1;
let acumulador = 0;

let menu = Number(
  prompt(`Selecione o nível de dificuldade: 
(1)Fácil
(2)Médio
(3)Difícil`)
);
switch (menu) {
  case 1:
    for (let i = 0; i < 5; i++) {
      chute = Number(prompt("Digite um numero de 1 a 20"));
      if (chute === facil) {
        alert("Certa resposta!!");
        break;
      } else if (chute > facil) {
        alert("Chute um número menor");
      } else {
        alert("Chute um número maior");
      }
      acumulador++;
      if (acumulador == 5) {
        alert("Você gastou todas as suas chances");
      }
    }
    break;

  case 2:
    for (let i = 0; i < 5; i++) {
      chute = Number(prompt("Digite um numero de 1 a 50"));
      if (chute === medio) {
        alert("Certa resposta!!");
        break;
      } else if (chute > medio) {
        alert("Chute um número menor");
      } else {
        alert("Chute um número maior");
      }
      acumulador++;
      if (acumulador == 5) {
        alert("Você gastou todas as suas chances");
      }
    }

    break;

  case 3:
    for (let i = 0; i < 5; i++) {
      chute = Number(prompt("Digite um numero de 1 a 100"));
      if (chute === dificil) {
        alert("Certa resposta!!");
        break;
      } else if (chute > dificil) {
        alert("Chute um número menor");
      } else {
        alert("Chute um número maior");
      }
      acumulador++;
      if (acumulador == 5) {
        alert("Você gastou todas as suas chances");
      }
    }
    break;

  default:
    break;
}
