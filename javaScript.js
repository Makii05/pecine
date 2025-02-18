
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".navbar-brand img");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const toggler = document.querySelector(".navbar-toggler"); 

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled", "bg-dark");
            navbar.classList.remove("bg-transparent");
            logo.src = "slike/3-cropped.svg"; 
        } else {
            navbar.classList.remove("scrolled", "bg-dark");
            navbar.classList.add("bg-transparent");
            logo.src = "slike/4-cropped.svg"; 
        }
    });
});
