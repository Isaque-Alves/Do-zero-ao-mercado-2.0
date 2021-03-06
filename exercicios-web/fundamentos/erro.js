function tratarErroELancar(erro) {
  //throw new Error("Ocorreu um erro!");
  //throw 10;
  // throw true;
  // throw 'mensagem';
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("FIM!");
  }
}

const obj = { nome: "Isaque" }; //variavel definida como 'nome' para gerar erro de forma proposital
imprimirNomeGritado(obj);
