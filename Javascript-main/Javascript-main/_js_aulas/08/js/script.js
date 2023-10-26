//Imagine que você precisa organizar seu guarda-roupa, e para isso, deve guardar seus chapéus em uma gaveta, suas calças em outra e suas meias em outra. Um array é uma estrutura semelhante ao guarda-roupa, onde você pode guardar “coisas” em um espaço reservado. Ou seja, estou reservando um espaço na memória.

const lista = [1, 2, 3, 4, 5]

console.log(lista);
console.log(typeof lista);

const itens = ["Aluno", true, 2, 4.75]
console.log(itens);

//Imprimindo array de acordo com a ordem da sequencia desejada

const arr = ["a", "b", "c", "d"]

console.log(arr)
console.log(arr[0])
console.log(arr[3])
console.log(arr[10])

const numbers = [5, 12, 4, 22]
console.log(numbers.length);

const myName = "Robox"
console.log(myName.length);

const othersNumbers = [1, 2, 3]
const allNumbers = numbers.concat(othersNumbers)
console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase())
console.log(text.toLowerCase())

//Para me informar qual é a posição de algum elemento dentro de outro elemento, sendo que ele pega a primeira ocorrencia, ou seja, se tiver dois t ele pega a posição do primeiro.
console.log(text.indexOf("g"))
console.log(text.indexOf("t"))

//Construção de objeto. No obejeto além de armazenar a variavel que posso usar mais tarde, também armazena o valor dela
const person = {
    name: "Rodox", age: 37, job:"Programador"
}

console.log(person)
//Imprimindo itens que eu quero no objeto
console.log(person.name)
console.log(person.age)
console.log(person.job)

console.log(typeof person.name)
console.log(typeof person.age)
console.log(typeof person.job)

const car = {
    engie: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000,
}

console.log(car)
//incluindo do lado de fora algo no objeto
car.doors = 4;
console.log(car)

//Deletando itens do objeto
delete car.km
console.log(car)

const obj= {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: [],
}

console.log(obj2)
console.log(obj2 instanceof Object)

Object.assign(obj, obj2)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(person))

const users = ["Rodox", "Pedro", "Aliny", "Miguel", "Naruto", "Olá"]

let i = 0;

while(i < users.length){
    console.log(`Listando usuário ${users[i]}`)
    i++
}

//Escreva um array que contenha 10 números  numa estrutura de repetição laço for percorra cada um dos elementos desse array

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let j = 0;

while(j < num.length){
    console.log(`O número atual é ${num[j]}`)
    j++;
}

//Empurra uma string para dentro de um array
const array = ["a", "b", "c"]
array.push("d")

console.log(array)
console.log(array.length)

//Elimina o último elemento, mas da pra escolher colocando o número da posição do elemento
array.pop()
const itemRemovido = array.pop()
console.log(array)
console.log(array.length)

//Inserindo vários elementos de uma vez
array.push("Dá", "para", "inserir", "vários")
console.log(array)

//Tira o primeiro elemento e armazena em outra váriavel
const letters = ["a", "b", "c"]
const letter = letters.shift()
console.log(letter)
console.log(letters)

//Acresceta os elementos na frente
letters.unshift("z", "x", "y")
letters.unshift("p")
console.log(letters)

const myElements = ["morango", "maça", "Abacate", "Pera", "abacate"]
console.log(myElements.indexOf("maça"))
console.log(myElements.indexOf("abacate"))
console.log(myElements.indexOf("Abacate"))
console.log(myElements.indexOf[2])

console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("abacate"))