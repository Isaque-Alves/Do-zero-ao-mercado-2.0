function segundoMaior(numeros) {
  const numerosOrdenados = numeros.sort(
    (numeroA, numeroB) => numeroB - numeroA
  );
  const segundoMaior = numerosOrdenados[1];
  return segundoMaior;
}

console.log(segundoMaior([12, 16, 1, 5])); // retornarĂ¡ 12
console.log(segundoMaior([8, 4, 5, 6])); // retornarĂ¡ 6
