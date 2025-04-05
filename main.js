let firstHeader = document.querySelector(".first-header");
let secondHeader = document.querySelector(".second-header");
let firstScroll = 0;
window.addEventListener("scroll", () => {
    
 let lastScroll = window.pageYOffset || document.documentElement.lastScroll;
 if(lastScroll > firstScroll) {
     secondHeader.style.bottom = "-100px"
     
 }
 else {
     
     secondHeader.style.bottom = 0;
 }
 firstScroll = lastScroll
});
let main = document.querySelector('main');
let openMenu = document.getElementById('open');
let menu = document.getElementById("menu");
let cancelMenu = document.getElementById("cancel")

openMenu.addEventListener("click", () => {
    menu.style.marginLeft = 0;

})
cancel.addEventListener("click", () => {
    menu.style.marginLeft = "-130%"
})