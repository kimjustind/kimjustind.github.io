var dbool;
window.onload = function() {
    dbool = (localStorage.getItem('isDark') === "true");
    if (dbool == true) {
        document.body.classList.add("dark");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/sun.svg' alt='light'>";
    } else {
        document.body.classList.remove("dark");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/moon.svg' alt='dark'>";
    }
};

function darkMode() {
    if (dbool == false) {
        document.body.classList.add("dark");
        document.getElementsByClassName("navbar")[0].classList.add("darknav");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/sun.svg' alt='light'>";
        localStorage.setItem('isDark', true);
        dbool = true;
    } else {
        document.body.classList.remove("dark");
        document.getElementsByClassName("navbar")[0].classList.remove("darknav");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/moon.svg' alt='dark'>";
        localStorage.setItem('isDark', false);
        dbool = false;
    }
}