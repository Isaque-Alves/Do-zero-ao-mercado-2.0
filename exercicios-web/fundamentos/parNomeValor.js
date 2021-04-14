const saudacao = "Salve"; //Contexto léxico(Local fisíco onde a variavel foi definida) 1

function exec() {
  const saudacao = "Falaaa"; //Contexto léxico 2
  return saudacao;
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
  nome: "Isaque",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
