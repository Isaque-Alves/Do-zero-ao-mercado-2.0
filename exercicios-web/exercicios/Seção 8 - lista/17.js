function somarNumeros(numeros) {
  const soma = numeros.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual,
    0
  );
  return soma;
}

console.log(somarNumeros([10, 10, 10])); // retornarĂ¡ 30
console.log(somarNumeros([15, 15, 15, 15])); // retornarĂ¡ 60
