function Soma (a , b){
  let soma = a+b;
return soma;
}

// Soma(10,15)

// console.log(soma(10,15))
// let resultado = soma (5,20)
// console.log (resultado)


// criar funçao para checar se o usuario é maior de idade
// Maior de idade: true
// Menor de idade:false

function ChecaMaiorIdade(a){
  if(a>=16){
   return true
  }else {
    return false
    }
}
let idade = prompt("idade")
idade = parseInt(idade);

console.log (ChecaMaiorIdade(idade))