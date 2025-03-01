const menu = document.querySelector('.menu-hamburguer')
const iconeMenu = document.querySelector(".icone-menu")
const menuHamburguer = document.querySelector('.navigation')
const menuList = document.querySelector(".navigation-list")

menu.addEventListener("click", function(){
    iconeMenu.src = (iconeMenu.src.includes("img/menu-line.svg")) ? "img/close-large-line.svg" : "img/menu-line.svg";
    menuHamburguer.classList.toggle('active');
    menuList.classList.toggle('active');
})

