function maiorOuIgual(primeiro, segundo) {
  if (typeof primeiro != typeof segundo) return false;
  return primeiro >= segundo;
}

console.log(maiorOuIgual(0, 0)); // retornarĂ¡ true
console.log(maiorOuIgual(0, "0")); // retornarĂ¡ false
console.log(maiorOuIgual(5, 1)); // retornarĂ¡ true
