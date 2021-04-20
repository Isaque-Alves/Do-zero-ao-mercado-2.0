//pessoa -> 123 -> {...}
const pessoa = { nome: "Isaque" };
pessoa.nome = "Arthur";
console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = { nome: "Ana" };

Object.freeze(pessoa);
pessoa.nome = "Maria";
pessoa.end = "Rua DEF";
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Isaque" });
pessoaConstante.nome = "Tentando alterar";
console.log(pessoaConstante);
