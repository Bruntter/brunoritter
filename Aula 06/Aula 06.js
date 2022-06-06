// Exercicios de Parcoding
//  1 - faça um programa que valide as seguintes informaçoes:
// a - nome: mais de 3 digitos
// b - idade: entre 0 e 150
// c - salario maior que 0
// d - sexo f ou m
// e - estado civil, s, c, d, v


// let nome=prompt("qual e o nome?")

// while(nome.length<3){
//   console.log("invalido");
//   nome=prompt("nome")
// }
// let idade=prompt("Qual sua idade?")
// while(idade>150 ||idade<0){
// console.log("erro")
//   idade=prompt("idade")
// }

// let salario = prompt("Qual seu salario? ")
// while (salario <0){
//   console.log("erro")
//   salario=prompt("salario")
// }

//   let sexo=prompt("Qual e seu sexo?")
// while(sexo != "Masculino" && sexo != "Feminino"){
//   console.log("erro")
//   sexo=prompt("sexo")
// }

// let estadoCivil=prompt("Qual seu Estado Civil?")
// while(estadoCivil != "Solteiro" && estadoCivil != "Casado" && estadoCivil != "Divorciado" && estadoCivil != "Viuvo"){
//   console.log("erro")
//   estadoCivil=prompt("estadoCivil")
// }






// Desenvolva um programa que leia 5 valores e mostre o menor entre eles.

// let numero1=prompt("Digite o Valor 1 ")
// let numero2=prompt("Digite o Valor 2 ")
// let numero3=prompt("Digite o Valor 3 ")
// let numero4=prompt("Digite o Valor 4")
// let numero5=prompt("Digite o Valor 5")
// if(numero1<numero2 && numero1<numero3 && numero1<numero4 && numero1<numero5){
//   console.log("O resultado menor é o valor 1 ")

  
// }else if(numero2<numero3 && numero2<4 && numero2<numero5){
//   console.log("O resultado menor é o valor 2") 
//  }else if(numero3<numero4 && numero3<numero5){
//    console.log("O resultado menor é o valor 3")
//   }else if(numero4<numero5){
//    console.log("O resultado menor é o valor 4")

// }else{
//   console.log("O resultado menor é o valor 5")
// }


// exercicio formatado
let minimoValor = parseFloat (prompt("Insira o valor 1"))
for (let i  = 2; i<= 5; i++){
  let novoValor = parseFloat(prompt("Insira o valor " + i))
  if (novoValor <minimoValor){
    minimoValor = novoValor
  }
 }
console.log(minimoValor)