//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let age = 22;

if (age > 18){
    console.log("Eu sou maior de idade!");
} else {
    console.log("Você não é maior de idade!");
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let $age = 20;
let SouHumana = true;

if ($age > 18 && SouHumana) {
    console.log("Eu sou maior de idade e sou humana!");
} else {
    console.log("Você NÃO é maior de idade e NÃO é humana!");
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let janeiro = 01;
let dezembro = 12;
let junho = "10 de junho é aniversário da Carol"

if (janeiro || dezembro) {
    console.log("Feliz aniversário");
} else {
    console.log("Não é o seu aniversário, porém, voce está de parabéns.")
} 