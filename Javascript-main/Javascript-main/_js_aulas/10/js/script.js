console.log(document.body);
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].textContent)

// Pegar elementos pela Tag
const listItens = document.getElementsByTagName("li");

console.log(listItens)

// Pegar elementos pela classe

const products = document.getElementsByClassName("product")

console.log(products)

// Pegar elementos pelo ID

const title = document.getElementById("title");
console.log(title);

// Pegando DIV
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

// Pegando ID
const mainContainer = document.querySelectorAll("#main-container");
console.log(mainContainer)

// Colocando um paragráfo via JavaScript 
const p = document.createElement("p")
const header = title.parentElement;
header.insertBefore(p, title)