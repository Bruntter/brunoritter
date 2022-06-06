// let times = [];
// times.push ("Corinthians");
// console.log(times);

// times[1] = "Palmeiras";
// console.log(times);
// console.log (times.leght);

// times[2] = "Vasco";
// console.log(times);

// times[3] = times[1];
// times[1] = times[2];
// times[2] = times[3];
// times.pop()

// console.log(times);







/*
01 - Crie uma funçao que recebe um array de 2 numeros e coloque eles em ordem crecente. nao use método sort.
  */


/*

let numeros = [];

numeros[0] = prompt("Digite um numero?")
numeros[1] = prompt("Digite outro numero?")
console.log(numeros)

if(numeros[0]>numeros[1]){
numeros[2] = numeros[0]
numeros[0] = numeros[1]
numeros[1] = numeros[2]
numeros.pop()
console.log(numeros)
}else{
  console.log (numeros)
}

*/

/*
// 02 - crie um script que pergunbte 3 numeros ao usuario, coloque em um array, depois exiba tal array. modifique os elementos do arrayde modo a a sequencia de numeros ficar do contrario. ou seja, se digitou: 1, 2, 3 vai apareer 3, 2, 1.

let numeros = parseFloat (prompt ("insira quantidade de numeros ?"))

let lista = [];
for (let i = 0; i < numeros; i++) {
  lista[i] = parseFloat(prompt("digite os valores"))
  console.log(lista)
}
lista.reverse();

console.log(lista)
*/




/*
exercicio 03 - crie um script que pede um inteiro positivo para o usuario.
em seguida, popule uma array com os numeros de fibonacci, na hora de somar com os termos anteriores, some os elementos anteriores do array
*/


let numeros = parseInt(prompt("Insira um numero inteiro: "))
let fibonacci = [];

