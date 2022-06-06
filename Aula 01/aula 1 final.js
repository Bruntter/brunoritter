//If
var precoProduto = prompt("Qual o preco?");
precoProduto = parseFloat(precoProduto);

var valorPago = prompt("Quanto você pagou?");
valorPago = parseFloat();

console.log(valorPago>= precoProduto)

if (valorPago == precoProduto){
  console.log("Parabens! Não ha troco")
}else if (valorPago>precoProduto) {
  console.log ("Há troco")
  var troco;
  troco=valorPago-precoProduto;
  console.log("O Troco é de:" + troco);
} else {
  console.log("Falta dinheiro")
  
}


// string = texto
// int/number = inteiro
// float = decimal
// object = objeto
