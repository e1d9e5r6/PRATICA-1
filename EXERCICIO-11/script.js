/*11. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;*/

let numTeste = Number(prompt("Inserir número = ",""));
let numDivide = numTeste/2;

/*
if(numTeste % 2 != 1 )
 alert("Numero par");
else
alert("Número impar")*/

if(numTeste % 2 != 1 )
 alert("O numero " + numTeste + " é par");
else
alert("O numero " + numTeste + " é impar");