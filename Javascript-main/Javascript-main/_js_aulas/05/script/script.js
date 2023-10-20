//Utilizando a estrutura switch case, solicite ao usuário que coloque no prompt a profissão. Caso digite programador, apresentar no console, você é um programador, caso você digite você é advogado, você é um advogados, caso digite engenheiro, você é um engenheiro e se ele digitar qualquer outra profissão, porfissão não encontrada.

let job = prompt('Qual a sua profissão?');

switch(job){
    case 'Programador':
        console.log(`Você é um ${job}!`);
        break;
    
    case 'Advogado':
        console.log(`Você é um ${job}`);
        break;
    
    case 'Engenheiro':
        console.log(`Você é um ${job}`);
        break;

    default:
        console.warn('Profissão não encontrada!')
}

//Loop. Enquanto for verdade, faça isso:

let contador = 1;

while (contador <= 5){
    console.log(contador);
    contador++;
}

/*Desafio:
Utilizando a estrutura while, solicite ao usuário que escolha um número de 0 a 10. Apresente a partir do número escolhido o somatório até 100
*/

let number = parseInt(prompt('Escolha um número de 0 a 10'));

while (number <= 100){
    console.log(number.toFixed(2).replace('.',','));
    document.write(`${number.toFixed(2).replace('.',',')}<br/>`);
    number+=5;
}

let number1 = parseInt(prompt('Escolha um número de 0 a 10'));

while (number1 >= 0){
    console.log(number1.toFixed(2).replace('.',','));
    document.write(`${number1.toFixed(2).replace('.',',')}<br/>`);
    number1-=5;
}

//Do com While

let contador1 = 5;

do{
    console.log(contador1);
    contador1--;
} while(contador1 > 0);

//Laço For, estabelece uma váriavel local que só funciona dentro da estrutura for

for(let i = 0; i <= 5; i++){// primeira condição é o valor da váriavel. Segunda condição até quando. Terceira condição o que fazer.
    console.log(i);
}

//Utilizando o laço FOR, escreve os números de 20 a 100

for(let n = parseInt(prompt('Digite um número de 20 a 100')); n <= 100; n++){
    console.log(`${n.toFixed(2).replace('.','.')}`)
    document.write(`<strong/>${n.toFixed(2).replace('.',',')}<br/>`)
}


//Escreva um programa em javascript que solicite um número ao usuário e exiba todos os número impares entre 1 e o numéro informado.

let number2 = parseInt(prompt('Digite um número'))

console.log(`Números ímpares entre 1 e ${number2}:`)

for(let r = 1; r <= number2; r++){
    if(r % 2 !== 0){
        console.log(r)
    }
}

//Quando o usuário digitar um número, retornar os números pares entre 0 e o número digitidado

let number3 = parseInt(prompt('Digite um número'));

console.log(`Números pares de 0 e ${number3}:`)
document.write(`Números pares de 0 e ${number3}:<br/>`)

for(let q = 0; q <= number3; q++){
    if(q % 2 == 0){
        console.log(q);
        document.write(`${q.toFixed(2).replace('.',',')}<br/>`);
    }
}