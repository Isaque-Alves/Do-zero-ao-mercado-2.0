function contarCaractere(caractereBuscado, frase) {
  return [...frase].filter((caractere) => caractere === caractereBuscado)
    .length;
}

console.log(contarCaractere("r", "A sorte favorece os audazes")); // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")); // retornará 1
