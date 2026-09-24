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