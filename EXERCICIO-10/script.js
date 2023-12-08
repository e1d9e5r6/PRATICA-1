/*10. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome, a idade e o ano
de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
em 2000”.
OBS: Pegue o ano atual como base*/

let nomeUsuario = (prompt("Inserir nome do usuário", ""));
let idadeUsuario = Number(prompt("Inserir idade usuário", ""));

let nasceUsuario = 2023 - idadeUsuario;

alert("Nome usuário = " + nomeUsuario + "------  idade usuário = " + idadeUsuario + " ------data nascimento = " + nasceUsuario);
