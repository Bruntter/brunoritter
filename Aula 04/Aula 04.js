// for (let i=1; i<=10; i++){
//     console.log("olá pela " + i + "ª vez")
// }



// let a = 0
// let b = 1

// while (a + b < 10000){
//     let c = b;
//     b = a + b
//     a = c;
//     console.log(b)
// }





// Jogo da adivinhação usando while

let segredo = Math.floor(Math.random() * 10);
let jogando = true;

while (jogando) {
  let palpite = prompt("Qual o seu palpite? ");
  palpite = parseInt(palpite)
  if (palpite == segredo) {
    console.log("Parabens Mulambada!");
    jogando = false;
  } else if (palpite > segredo) {
    console.log("Fala um pouco menos");
  } else {
    console.log("Fala um pouco mais!");
  }
}
