const soma = function (x, y) {
  return x + y;
};

const imrpimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imrpimirResultado(3, 4);
imrpimirResultado(3, 4, soma);
imrpimirResultado(3, 4, function (x, y) {
  return x - y;
});
imrpimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: function () {
    console.log("opa");
  },
};

pessoa.falar();
