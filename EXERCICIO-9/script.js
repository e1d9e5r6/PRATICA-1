/*
9. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const valorMinimo = 0.25
const valorMaximo = 0.30

let quantCompra = Number(prompt("Inserir quantidade compra",""));

let valorCompra1 = (valorMinimo * quantCompra);
let valorCompra2 = (valorMaximo * quantCompra);

if(quantCompra < 12)
alert("Valor da compra = " + valorCompra2.toFixed(2) + " Preço duzia = " + valorMaximo.toFixed(2));
else
alert("valor da compra = " + valorCompra1.toFixed(2) + " Preço duzia = " + valorMinimo.toFixed(2));