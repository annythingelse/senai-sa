let nivelDeDificuldade;
let num;

nivelDeDificuldade = Number(
  prompt(`Selecione o nível de dificuldade: 
(1)Fácil
(2)Médio
(3)Difícil`)
);

switch (nivelDeDificuldade) {
  case 1:
    num = Number(prompt("Digite um número de 1 a 20"));
    break;
  case 2:
    num = Number(prompt("Digite um número de 1 a 50"));
  case 3:
    num = Number(prompt("Digite um número de 1 a 100"));
}

let magicNumber;
let acumulador = 0;
for (let i = 0; i < 5; i++) {
  magicNumber = Number(prompt("Encontre o número mágico"));
  if (magicNumber < num) {
    alert("Chute um número mais alto");
  } else if (magicNumber > num) {
    alert("Chute um número menor");
  } else if (magicNumber == num) {
    alert("Certa resposta!!");
  }

  acumulador++;
  if (acumulador == 5) {
    alert("Você gastou todas as suas chances");
  }

  console.log(acumulador);
}
