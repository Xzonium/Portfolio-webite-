const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//links for projects 
function openIt () {
    const url = 'https://lol-shop-g2g.netlify.app'
    window.open (url);
}

// preloader
// var loader =document.getElementById("preLoader");

// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })