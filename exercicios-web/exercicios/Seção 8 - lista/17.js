function somarNumeros(numeros) {
  const soma = numeros.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual,
    0
  );
  return soma;
}

console.log(somarNumeros([10, 10, 10])); // retornará 30
console.log(somarNumeros([15, 15, 15, 15])); // retornará 60
