function receberSomenteOsParesDeIndicesPares(numeros) {
  return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;
    return numeroPar && indicePar;
  });
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])); // retornarĂ¡ []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])); // retornarĂ¡ [10, 22]
