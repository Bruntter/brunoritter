// 1 - Faça um sistema que receba 3 valores do usuario e retorne o maior entre eles. como apoio, elabore um fluxograma de sistema ante


// let valor1 = parseFloat(prompt("Valor 1 : "))
// let valor2 = parseFloat(prompt("Valor 2 : "))
// let valor3 = parseFloat(prompt("Valor 3 : "))


// if (valor1 > valor2) {
// if (valor1 > valor3){
//   console.log("Valor 1 é o maior!")
// }else {
//   console.log ("Valor 3 é maior!")
//  };
// }else if (valor2 < valor3){
//   console.log ("Valor 3 é maior!")
//   } else {
//   console.log("Valor 2 é o maior!")
// }





// 2 - Desenvolva um programa que pergunte em que turno o usuario estuda, podendo ser "M", "T" ou "N"(manha, tarde ou noite).
//   Em seguida, diga "Bom dia", "Boa tarde", "Boa noite" ou "Valor Invalido"
// >> "Extra" Caso o valor seja inválido peça um novo valor ao usuário.
let respondendo  = true
while (respondendo){
  
let turno = prompt("Em qual Turno você estuda?")
if(turno =="Manha"){
console.log ("Bom dia, Bem vindo(a) ")
  respondendo = false
} 
else if(turno =="Tarde"){
console.log ("Boa tarde, Bem vindo(a) ")
respondendo = false
} 
else if(turno =="Noite"){
console.log ("Boa noite, Bem vindo(a) ")
respondendo = false
} else{
console.log ("Comando Inválido, digite novamente!")
} 
}