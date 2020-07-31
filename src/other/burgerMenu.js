document.addEventListener('DOMContentLoaded', function() {

    const btn = document.querySelector(".nav--burger");
    const menu = document.querySelector(".navbar-collapse");

    btn.addEventListener("click", function() {
        menu.classList.toggle("show--burger");
    });

});