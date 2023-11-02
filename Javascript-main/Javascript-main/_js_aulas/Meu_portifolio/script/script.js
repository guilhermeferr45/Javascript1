//document é toda o HMTL, o querySelector, seleciona alguma tag do HTML
let header = document.querySelector("header");

let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

//Referenciar a minha janela é o Window
window.addEventListener("scroll", () => {//o evento a ser ouvido, aqui é quando eu scrollar no mouse
    header.classList.toggle("shadow", window.scrollY > 0);
 });

 menu.onclick = () => {
    navbar.classList.toggle ("active")
 }

 window.onscroll = () => {
    navbar.classList.remove ("active");
 }

 let darmode = document.querySelector("#darkmode");

 darkmode.onclick = () =>{
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon","bx-sun");
        document.body.classList.add("active")
    }
    else{
        darkmode.classList.replace("bx-sun","bx-moon");
        document.body.classList.remove("active")
    }
 }