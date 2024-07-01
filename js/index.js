let navbar = document.querySelector(".navbar");
let header = document.querySelector("#header");

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 200) {
        header.style.background = "#547880";
    } else {
        header.style.background = "transparent";
    }
});
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}


// JavaScript for sliding testimony
let slideIndex = 0;
showTestimony(slideIndex);

function showTestimony(index) {
    const testimonies = document.querySelectorAll('.testimony');
    console.log(testimonies);
    if (index >= testimonies.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = testimonies.length - 1; }
    testimonies.forEach(testimony => testimony.style.display = "none");
    testimonies[slideIndex].style.display = "block";
}

function nextTestimony() {
    showTestimony(slideIndex += 1);
}

function prevTestimony() {
    showTestimony(slideIndex -= 1);
}
