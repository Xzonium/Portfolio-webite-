const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//links for projects 
function openRPS () {
    const url = 'https://rock-paper-scissors-1921.netlify.app/'
    window.open (url);
}
function openChess () {
    const url = 'https://chess1997.netlify.app/'
    window.open (url);
}
function openNode () {
    const url = 'https://the-ar-project.netlify.app/'
    window.open (url);
}

// preloader
// var loader =document.getElementById("preLoader");

// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })