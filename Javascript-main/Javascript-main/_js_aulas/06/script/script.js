//Criando função

//Define o que a função irá fazer
function minhaFuncao(){
    console.log("Testando")
}

//Depois precisa chamar a função pra executa-la
minhaFuncao()
minhaFuncao()
minhaFuncao()
minhaFuncao()
minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt){
    console.log(`Imprimindo ${txt}`)
}

funcaoComParametro("DEVFull - Boa noite")
funcaoComParametro("DEVFull - Boa tarde")
funcaoComParametro("DEVFull - Bom dia")

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma (n1, n2){
    return n1 + n2
}

const resultado = soma (a, b)
console.log(resultado)

const resultado1 = soma (c, b)
console.log(resultado1)

const resultado2 = soma (d, c)
console.log(resultado2)

//Realize a operação que realize a subtração de dois números

const e = 50;
const f = 60;

function subtracao (n3, n4){
    return n3 - n4
}

 const resultado3 = subtracao(e, f)
 console.log(resultado3)

 const testeArrow = () => {
    console.log("Sou uma Arrow function")
 }

 testeArrow()

 const parOuImpar = (n) => {
    if (n % 2 === 0){
        console.log("Par")
        return
    }
    console.log("impar")
 }

 parOuImpar(5);
 parOuImpar(4);
 parOuImpar(100);

 const raizQuadrada = (x) => {
    return x * x
 }

 console.log(raizQuadrada(4));
 console.log(raizQuadrada(3));
 console.log(raizQuadrada(13));

 const multiplicacao1 = function (n, m){
    if (m === undefined){
        return n * 2
    }
    
    else{
        return n * m
    }
 }

 console.log(multiplicacao1(4, 20))
 console.log(multiplicacao1(4))