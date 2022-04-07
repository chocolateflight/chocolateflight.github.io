// Menu

let menuTarget = document.getElementById("main-menu");
let sideMenu = document.getElementById("sidemenu");
let isMenuOpen = 0;

sideMenu.style.display = "none"

let openMenu = function() {
    if (isMenuOpen === 0) {
        sideMenu.style.display = "block";
        isMenuOpen = 1;
    } else if (isMenuOpen === 1) {
        sideMenu.style.display = "none";
        isMenuOpen = 0;
    };
};

let closeMenu = function() {
    sideMenu.hidden = true;
}

menuTarget.addEventListener("click", openMenu);