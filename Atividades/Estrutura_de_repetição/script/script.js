//1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

let number1 = parseInt(prompt('Digite um número:'))
let number2 = parseInt(prompt('Digite outro número:'))

if (number1 > number2){
    console.log(`O maior número é ${number1.toFixed(2).replace('.','.')}`)
    document.write(`O maior número é ${number1.toFixed(2).replace('.','.')}<br/>`)
}
else{
    console.log(`O maior número é ${number2.toFixed(2).replace('.','.')}`)
    document.write(`O maior número é ${number2.toFixed(2).replace('.','.')}<br/>`)
}

//2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

let number = parseInt(prompt(`Digite um número para saber se ele é ímpar ou par:`))

if (number % 2 == 0) {
    console.log(`O número ${number} é par!`)
} 

else {
    console.log(`O número ${number} é ímpar!`)
}

//3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

let par = parseInt(prompt(`Digite um número`))

for(let i = 1; i <= par; i++){

    if(i % 2 == 0){

        console.log(`${i} Par`)
    }
}

//4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.

let n2 = parseInt(prompt(`Digite um número para apresentar sua tabuada:`))

for(let n1=1; n1<=10 ; n1++)

   console.log(`${n1} x ${n2} = ${n1*n2}`)


//5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

let number3 = parseInt(prompt("Digite um número para saber se ele é negativo, nulo ou positivo:"))

if (number3 > 0){
    console.log("Número positivo")
}

else if (number3 === 0){
    console.log("Igual a zero")
}

else{
    console.log("Número negativo")
}


//6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

let vogal = prompt("Digite uma letra:")

if (vogal == "a" || vogal == "e" || vogal == "i" || vogal == "o" || vogal == "u"){
    console.log("Vogal")
}
else{
    console.log("Consoante")
}


//7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

let note = parseInt(prompt("Digite um número de 0 a 10:"))

if (note >= 0 && note <= 10){
    console.log("Número válido")
}
else{
    console.log("Nota inválida")
}


//8. Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console.

let number4 = parseInt(prompt("Digite um número de 0 a 100"))

while(number4 <= 100){
    console.log(number4)
    number4++
}


//9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

let number5 = parseInt(prompt("Digite um número"))
let number6 = parseInt(prompt("Digite outro número"))
let operator = prompt("Qual das quatros operações deseja executar?")

switch (operator){
    case '+':
        console.log(`A soma do número é ${number5 + number6}`);
        break;

    case '-':
        console.log(`A soma do número é ${number5 - number6} é:`)
        break;

    case '*':
        console.log(`A soma do número é ${number5 * number6} é:`)
        break;

    case '/':
        console.log(`A soma do número é ${number5 / number6} é:`)
        break;
}


//10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.

let number7 = parseInt(prompt("Digite um número para sabermos quais são os números ímpares até ele"))

for (let im = 0; im <= number7; im++){
    if (im % 2 == 1){
        console.log(im);
    }
}


