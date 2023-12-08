/*
12. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

let nasceUsuario = Number(prompt("Inserir data nascimento =",""))
let idadeUsuario = 2023 - nasceUsuario

if(idadeUsuario >= 18)
alert("Usuário tem " + idadeUsuario + "anos de idade e deve votar")
else
alert("Usuário tem " + idadeUsuario + "anos de idade e não deve votar")