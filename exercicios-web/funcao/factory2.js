function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("Abajur", 56));
console.log(criarProduto("iPad", 4000));
console.log(criarProduto("iPod", 2500));
console.log(criarProduto("iPhone", 8000));
