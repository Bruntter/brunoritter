// exercicio 2
// receber dois valores e exibir se sao iguais ou nao
// entrada
// 2
// 7
// "2 e 7 nao sao iguais."
// entrada
// 4
// 4
// saida
// "4 e 4 sao iguais."


// let valor1 = parseFloat (prompt ("Valor do usuário 1"))
// let valor2 = parseFloat (prompt ("valor do usuário 2"))
// if (valor1 == valor2) {
//   console.log ("Parabens,"  + (valor1) + " e " + (valor2)+ " são iguais!" )
// }else {
//   console.log ( + (valor1) + " e " + (valor2)+ " São diferentes! ")
// }






// exercicio 3
// receber um valor, trata lo e retornar se ele é par ou impar!

// let volta  = true
// while (volta){

// let valor1 = parseFloat (prompt ("Insira o valor: "))
// if (valor1 % 2 == 1){
//   console.log ("Número Impar")
// }else {
//   console.log ("Número Par: ")
// }
// }


// exercicio 4
// conte de 1 a 20, mostrando se o valor é par ou impar

// for (let i = 1 ; i <= 20; i++){
//   if(i % 2 ==0){
//     console.log(i+" é par!");
//     }else{
//     console.log (i+ " é impar!")
//     }
// }



// Exercicio 5
// Receba um valor do usuario e mostre a tabuada daquele valo!

// let tabuada = (prompt(" Insira o numero!"))
// for (let i = 1 ; i <=10 ; i++){
//   console.log (tabuada + " x " + i + " = " + tabuada*i)  
// }


/*
exercicio 6
em uma eleiçao para vereadores, existem quatro candidatos. os votos sao informados por meio de codigo. os codigos utilizados sao:

1 ,2,3,4 - votos para os respectivos candidatos
(deve montar a tabela ex: 1 - jose/ 2 - joao/etc)
5  - voto nulo
6 - voto em branco

faça um programa que calcule e mostre:
o total de votos para cada candidato
o total de votos nulos
o total de votos em branco
a percentagem de votos nuos sobre o total de votos.
a percentagem de votos em branco sobre total de votos
quem venceu a eleiçao.
  */




// let opcão1 = 0
// let opcão2 = 0
// let opcão3 = 0
// let opcão4 = 0
// let opcão5= 0
// let opcão6= 0


// console.log (" 1  Jose");
// console.log (" 2  Mario");
// console.log (" 3  Bisonho");
// console.log (" 4  Otavio");
// console.log (" 5  Voto Nulo");
// console.log (" 6  Voto em Branco");


// for (let i = 1; i <= 6; i++) {

//   voto = parseFloat(prompt("digite seu voto.."))

// while (voto < 1 || voto > 6) { 
//   voto = parseFloat(prompt("voto invalido, digite novamente!"))
// }
//   console.clear ("") // apaga os votos mas computa.  
//     if (voto == 1) {
//   opcão1++
//     } else if (voto == 2) {
//  opcão2++
//     } else if (voto == 3) {
//  opcão3++
//     } else if (voto == 4) {
//    opcão4++
//     } else if (voto == 5) {
//      opcão5++
//     } else if (voto == 6) {
//      opcão6++
//     } else {
//       console.log("digite um candidato valido!")
//     }
//   }

// console.log("parabens pelo seu voto, aguarde a contagem...")

//   console.log("Jose teve " + opcão1 + " votos");

//   console.log(" Mario teve  " + opcão2);

//   console.log("Bisonho teve " + opcão3);

//   console.log(" Otavio teve " + opcão4);

//   console.log(" NULO teve " + opcão5);

//  console.log(" EM BRANCO teve " + opcão6);

// let total=(opcão5 / 6*100)
// console.log("O voto Branco teve "  +  total  +  " % ")

// let Total=(opcão6 / 6*100)
// console.log ( "O voto NULO teve " + Total+ " %");

// if(opcão1>=opcão2 && opcão1>=opcão3 && opcão1>=opcão4 && opcão1>+opcão5 && opcão1>+opcão6){
//   console.log("Parabens Jose ganhou a eleição")
// }else if(opcão2>=opcão3 && opcão2>=opcão4 && opcão2>=opcão5 && opcão2>+opcão6 ){
//   console.log("Parabens Mario ganhou a eleição")
// }else if(opcão3>=opcão4 && opcão3>=opcão5 && opcão3>=opcão6){
//   console.log("Bisonho ganhou a eleição")
// }else if(opcão4>=opcão5 && opcão4>=opcão6){
//   console.log("Otavio ganhou a eleição")
// }else if(opcão5>=opcão6){
//   console.log("Ninguem Ganhou eleição")
// }else{
//   console.log("voto em branco")
// }



