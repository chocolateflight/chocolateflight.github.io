// Menu

let menuTarget = document.getElementById("main-menu");
let sideMenu = document.getElementById("sidemenu");
let sideMenuItem = document.getElementsByClassName("side-menu-item");
let isMenuOpen = 0;

sideMenu.style.display = "none"

let opencloseMenu = function() {
    if (isMenuOpen === 0) {
        sideMenu.style.display = "block";
        isMenuOpen = 1;
    } else if (isMenuOpen === 1) {
        sideMenu.style.display = "none";
        isMenuOpen = 0;
    };
};

menuTarget.addEventListener("click", opencloseMenu);

for (let i = 0; i < sideMenuItem.length; i++) {
    sideMenuItem[i].addEventListener("click", opencloseMenu);
}

