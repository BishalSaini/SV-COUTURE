window.onscroll = function() { stickyNav() };

var menuLink = document.querySelector('.nav-links ul li:nth-child(3) a'); 
var navOffsetTop = menuLink.offsetTop; 

function stickyNav() {
    if (window.pageYOffset > navOffsetTop) {
        menuLink.classList.add('fixed');
    } else {
        menuLink.classList.remove('fixed');
    }
}
