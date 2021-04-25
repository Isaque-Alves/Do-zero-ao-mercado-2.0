function calcularMedia(numeros) {
  const quantidadeDeNumeros = numeros.length;
  const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB);
  return somaTotal / quantidadeDeNumeros;
}

console.log(calcularMedia([0, 10])); //retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5])); // retornará 3
