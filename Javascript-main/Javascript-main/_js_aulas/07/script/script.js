//1. Crie uma função chamada "soma" que recebe dois parâmetros, "a" e "b". A função deve calcular a soma dos dois parâmetros e retornar o resultado. Em seguida, chame a função "soma" com valores diferentes e exiba o resultado no console.

alert ("Exercício 1: Calcular a soma:");
let a = parseInt(prompt("Diegite o valor de a"))
let b = parseInt(prompt("Diegite o valor de b"))

function soma (n1, n2){
    return n1 + n2
}

let resultado = soma (a, b)
console.log(resultado)

//2. Crie uma função chamada "media" que recebe três parâmetros, "a", "b" e "c". A função deve calcular a média dos três valores e retornar o resultado. Em seguida, chame a função "media" com valores diferentes e exiba o resultado no console.

alert ("Exercício 2: Calcular a média:");
let c = parseInt(prompt("Diegite o valor de a"))
let d = parseInt(prompt("Diegite o valor de b"))
let e = parseInt(prompt("Diegite o valor de c"))

function media (n3, n4, n5){
    return (n3 + n4 + n5)/3
}

const resultado1 = media (c, d, e);
console.log(resultado1);

//3. Crie uma função chamada "maiorValor" que recebe três parâmetros, "a", "b" e "c". A função deve retornar o maior valor entre os três. Em seguida, chame a função "maiorValor" com valores diferentes e exiba o resultado no console.

alert ("Exercício 3: Retornar o maior valor:");

let f = parseInt(prompt("Diegite o valor de a"))
let g = parseInt(prompt("Diegite o valor de b"))
let h = parseInt(prompt("Diegite o valor de c"))

const maiorValor = (n6, n7, n8) =>{
    if (n6 > n7 && n6 > n8){
        return n6
    }

    else if(n6 < n7 && n7 > n8 )
    {
        return n7
    }
    
    else{
        return n8
    }
}

const resultado2 = maiorValor(f, g, h)
console.log(resultado2)

//4. Crie uma função chamada "imprimeMensagem" que recebe um parâmetro "mensagem". A função deve exibir a mensagem recebida no console. Em seguida, chame a função "imprimeMensagem" com diferentes mensagens e exiba o resultado no console.

alert ("Exercício 4: Imprime mensagem:");

let mensagem = prompt("Escreva uma mensagem")

const imprimeMensagem = (sms) =>{
    return sms
}

const resultado3 = imprimeMensagem(mensagem);
console.log(mensagem)

//5. Crie uma função chamada "imprimeNumeros" que recebe um parâmetro "num". A função deve imprimir no console todos os números de 0 até "num", em ordem crescente. Em seguida, chame a função "imprimeNumeros" com diferentes valores para "num" e exiba o resultado no console.

alert ("Exercício 5: Contando números:")

let n9 = 0;
let num = parseInt(prompt("Digite um número"))

function imprimeNumeros (n){
    while(n9 <= n){
        console.log(n9)
        n9++
    }
}

const resultado4 = imprimeNumeros(num);

//6. Crie uma função chamada "imprimeImpares" que recebe um parâmetro "num". A função deve imprimir no console todos os números ímpares de "num" até 0, em ordem decrescente. Em seguida, chame a função "imprimeImpares" com diferentes valores para "num" e exiba o resultado no console.


alert ("Exercício 6: Imprime números ímpares:")

let num1 = parseInt(prompt("Digite um número:"))

function imprimeImpares (n10){
    for(i = 0; n10 >= i ; n10--){
        if(n10 % 2 !== 0){
            console.log(n10)
        }
    }    
}

const resultado5 = imprimeImpares (num1)

//7. Crie uma função chamada "calculaAreaRetangulo" que recebe dois parâmetros, "base" e "altura". A função deve calcular a área de um retângulo utilizando a fórmula "base x altura" e retornar o resultado. Em seguida, chame a função "calculaAreaRetangulo" com diferentes valores para "base" e "altura" e exiba o resultado no console.

alert ("Exercício 7: Calcular a área do retângulo:");

let j = parseInt(prompt("Digite a altura do retângulo"));
let k = parseInt(prompt("Digite a base do retângulo"));

function calculaAreaRetangulo (n11, n12){
    return n11 * n12
}

const resultado6 = calculaAreaRetangulo(j, k);
console.log(resultado6);

//8. Crie uma função chamada "verificaPrimo" que recebe um parâmetro "num". A função deve verificar se o número recebido é primo e exibir uma mensagem no console informando se é ou não primo. Em seguida, chame a função "verificaPrimo" com diferentes valores para "num" e exiba o resultado no console.

alert ("Exercício 8: Verifica se é primo: ")
let l = parseInt(prompt("Digite um número: "))

const verificaPrimo = (n13) =>{
    if(n13 % n13 != 0){
    console.log(`O número ${n13} é primo`)
    }
    else{
        console.log(`O número ${n13} não é primo`)
    }
}
(verificaPrimo(l))

//9. Crie uma função chamada "concatenaTexto" que recebe dois parâmetros, "texto1" e "texto2". A função deve concatenar os dois textos recebidos e retornar o resultado. Em seguida, chame a função "concatenaTexto" com diferentes valores para "texto1" e "texto2" e exiba o resultado no console.

alert("Exercício 9: Concatena texto")

let text1 = prompt("Digite algo")
let text2 = prompt("Digite outra coisa")

const concatenaTexto = (n14, n15) =>{
    return n14 +" " + n15
}

const resultado7 = concatenaTexto(text1, text2)
console.log(resultado7)

//10. Crie uma função chamada "imprimeTabuada" que recebe um parâmetro "num". A função deve imprimir no console a tabuada do número recebido, de 1 até 10. Em seguida, chame a função "imprimeTabuada" com diferentes valores para "num" e exiba o resultado no console.

alert("Exercício 10: Tabuada:")

let num3 = parseInt(prompt("Digite um número:"))

const imprimeTabuada = (n16) =>{
    for(t = 1; t <= 10; t++){
        console.log(`${n16} * ${t} = ${n16 * t}`)
    }
}

imprimeTabuada(num3);