

const aestheticPage = document.getElementById("aesthetics");
const graphicDesignPage = document.getElementById("graphicdesign");
const switchToaesthetic = document.getElementById("switch-to-aesthetics");
const switchToGraphicDesign = document.getElementById("switch-to-graphic-design");
const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("close");
const navBar = document.getElementById("nav")


// Hamburger Menu functionality

menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    navBar.style.display = "flex";
});

menuClose.addEventListener("click", () => {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    navBar.style.display = "none";
});


//Aesthetic to graphic design page switch

switchToGraphicDesign.addEventListener("click", () => {
    aestheticPage.style.display = "none";
    graphicDesignPage.style.display = "block";
    switchToaesthetic.classList.remove("active");
    switchToGraphicDesign.classList.add("active");
});

switchToaesthetic.addEventListener("click", () => {
    aestheticPage.style.display = "block";
    graphicDesignPage.style.display = "none";
    switchToaesthetic.classList.add("active");
    switchToGraphicDesign.classList.remove("active");
});