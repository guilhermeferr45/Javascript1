console.log(5 <= 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 == 5);
console.log(5 != 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");

// Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

let idade = 50;
console.log(`A idade é: ${idade}`);

let a = 10,
    b = 50,
    c = 70;

    console.log(a, b, c)
    console.log(`As idades são: ${a} ${b} ${c}`)

let age = prompt("Digite a sua idade");
alert(`Você tem ${age} anos`);

//Escrever um programa que solicite ao usuário o nome, em seguida o programa solicita os sobrenome. Após isso, o programa exibe no console a frase "O nome completo é: [nome completo do usuário]"

let firtname = prompt("Qual o seu primeiro nome?");
let secondname = prompt("Qual o seu sobrenome?");
let lastname = prompt(`Você tem último nome?`)
if (lastname == "Não"){
    console.log(`Nome completo do usuário é ${firtname} ${secondname}`);
}

if (lastname == "Sim"){
    let lastname1 = prompt("Qual seu último nome?");
    console.log(`Nome completo do usuário é ${firtname} ${secondname} ${lastname1}`);
}

console.error("error!!!"); //Avisso de erro
console.warn("Aviso"); // Aviso de nome

// Condição
let numero1 = prompt("Digite um número: ");

if(numero1 >=18){
    console.log("Maior de idade")
}

let username = prompt("Qual seu usuário?")

if (username == "Guilherme"){
    console.log("Estou com Guilherme em frente")
}

else{
    console.log("Usúario não cadastrado")
}

let idade1 = prompt("Qual a sua idade?")

if (idade1 >= 18 && idade1 <= 70){
    console.log("Pode entrar")
}

else{
    console.log("Não pode entrar")
}

//Escreva um programa que solicite ao usuário que digite um número qualquer em seguida o programa deve solicitar que o usurário solicte outro número, após isso o progroma apresenta a soma dos dois números. Se essa soma for maior ou igual a 100, apresentar na tela a mensagem parcelamos em até 10x sem juros do contrário pagamento a vista

let number1 = parseInt(prompt("Digite um número"));//Problema que estava dando era, antes era string por padrão entao ele pega o valor e junta, por exemplo se eu colocasse 10 e 10 ele juntava e não somava, ficava 1010. Com esse parseInt transforma em número e depois soma.
let number2 = parseInt(prompt("Digite outro número"));


if (number1 + number2 >= 100){
    console.log("Parcelamos em 10x sem juros")
}

else{
    console.log("Pague a vista")
}