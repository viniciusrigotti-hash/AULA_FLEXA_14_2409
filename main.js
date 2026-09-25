// const notas = [4, 7, 9, 2, 10];

// const aprovados = notas.filter(n => n >= 7);
// console.log(aprovados);

// function dobrar (vetor){
//     const aprovadosDobro = aprovados.map(n => n * 2);
//     console.log(aprovadosDobro);
// };

// dobrar(aprovados);

//////////////////////////////////////////////////////////////////////////////////
// 1

// function executarOperacao(a, b, operacaoCallback) {
//     return operacaoCallback(a, b);
// };

// function somar (a, b){
//     return a + b;
// };

// console.log(executarOperacao(2, 4, somar));

//////////////////////////////////////////////////////////////////////////////////
// 2

// function formatarNome(nome){
//     return console.log(`Aluno: ${nome}.`);
// };

// function processarLista (lista, callback){
//     return lista.map(callback)
// };

// const alunos = ["Nicolas", "Henrique", "Vinicius", "Gabriel"];

// processarLista(alunos, formatarNome);

//////////////////////////////////////////////////////////////////////////////////
// 3

// function baixarArquivo(nomeArquivo, callbackFinal){
//     console.log(`Iniciando download de ${nomeArquivo}...`);
//     setTimeout(() => {
//         console.log(callbackFinal(nomeArquivo));
//     }, 5000);
// };

// function arquivoBaixado (nomeArquivo){
//     return `${nomeArquivo} baixado!`
// };

// baixarArquivo("Trojan", arquivoBaixado);

//////////////////////////////////////////////////////////////////////////////////
// 4

// function ehBissexto (ano){
//     return ano % 4 === 0 && ano % 400 !== 0;
// }

// function filtrarNumeros(lista, callbackCondicao){
//     return lista.filter(callbackCondicao);
// };

// const anos = [1612, 1711, 1884, 1234, 1923, 1944, 2019, 1988, 2007, 2028, 2024, 2136, 5943];

// console.log(filtrarNumeros(anos, ehBissexto));

//////////////////////////////////////////////////////////////////////////////////
// 5

// const precos = [9, 10, 16, 23, 82, 60, 100];

// function desconto(valores){
//     const valoresDescontados = valores.map(n => n * 0.90);
//     return valoresDescontados;
// }

// console.log(desconto(precos));

//////////////////////////////////////////////////////////////////////////////////
// 6

// function validarEmail(email, callbackSucesso, callbackErro) {
//   if (email.includes("@")){
//     callbackSucesso(email);
//   } else {
//     callbackErro(email);
//   };
// };

// function aoSucesso(msg) {
//   console.log("✅ SUCESSO: " + msg);
// };
// function aoErro(msg) {
//   console.log("❌ ERRO: " + msg);
// };

// validarEmail("dev@javascript.com", aoSucesso, aoErro);
// validarEmail("emailsemarroba.com", aoSucesso, aoErro);


//////////////////////////////////////////////////////////////////////////////////
// 7

// const usuarios = [
//   { id: 1, nome: "Alice" },
//   { id: 2, nome: "Bruno" },
//   { id: 3, nome: "Carla" }
// ];

// const usuarioEncontrado = usuarios.find(u => u.id == 2);

// console.log(usuarioEncontrado);

//////////////////////////////////////////////////////////////////////////////////
// 8

// const produtos = [
//   { item: "Teclado", preco: 150 },
//   { item: "Mouse", preco: 80 },
//   { item: "Monitor", preco: 900 }
// ];

// produtos.sort((a, b) => a.preco - b.preco);

// console.log(produtos);

//////////////////////////////////////////////////////////////////////////////////
// 9

// const carrinho = [25, 15, 60, 100];

// const total = carrinho.reduce((acc, item) => acc + item, 0);

// console.log(`Total do carrinho: R$${total}`);

//////////////////////////////////////////////////////////////////////////////////
// 10

// function emCaixaAlta(texto) {
//   return `${texto.toUpperCase()}!!!`;
// }

// function formatarTexto(frase, callbackFormatador) {
//   return callbackFormatador(frase);
// }

// console.log(formatarTexto("aprender callbacks e divertido", emCaixaAlta));