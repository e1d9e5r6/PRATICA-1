/*
8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

let valorPrimeiro = Number(prompt("Inserir primeiro numero", ""));
let valorSegundo = Number(prompt("Inserir segundo numero",""));

if (valorPrimeiro - valorSegundo == 0)
  alert("Numeros iguais");
else if(valorPrimeiro - valorSegundo < 0)
  alert("Primeiro valor é menor do que o segundo valor");
else
  alert("Primeiro valor é maior do que o segundo valor");   

  