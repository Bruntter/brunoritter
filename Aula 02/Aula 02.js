// console.log("Fala e maycon mulambo!"); /* só uma exibição!vai exibir mas nao vai mais*/


// var copoVerde;
// copoVerde= "24"

// console.log(typeof(copoVerde))

// copoVerde = parseInt(copoVerde)

// console.log(typeof copoVerde)
// console.log ("Temos:")
// var copoVerde = "Coca-cola";
// var copoPreto = "Guaraná";
// console.log(copoVerde, copoPreto)
// console.log ("troca para:")
// var copoBranco = "vazio"
// copoBranco = copoVerde
// copoVerde = copoPreto
// copoPreto=copoBranco  
// console.log(copoVerde,copoPreto)


var entradausuario = prompt("Qual o seu nome?");

console.log("ola, " + entradausuario + "!!! :)");

var entradaidade = prompt("Qual sua idade?");

entradaidade = parseInt(entradaidade)

if (entradaidade > 18) {
  console.log("Você é maior de idade!")
} 
  else if(entradaidade == 18){
    console.log ("Já pode ser preso:)")
  }
else {console.log("Vou ligar para sua mãe")
  
}


