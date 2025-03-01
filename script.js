const menu = document.querySelector('.menu-hamburguer')
const iconeMenu = document.querySelector(".icone-menu")

menu.addEventListener("click", function(){
    iconeMenu.src = (iconeMenu.src.includes("img/menu-line.svg")) ? "img/close-large-line.svg" : "img/menu-line.svg";
})

