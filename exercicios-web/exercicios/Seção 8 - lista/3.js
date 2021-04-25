function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
  const salarioBruto = horasTrabalhadas * ganhoPorHora;
  const salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;
  return `Salário igual a R$ ${salarioLiquido}`;
}

console.log(calcularSalarioLiquido(180, 60)); // retornará "Salário igual a R$ 7560"
