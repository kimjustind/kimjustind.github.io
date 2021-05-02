var dbool;
window.onload = function() {
    dbool = (localStorage.getItem('isDark') === "true");
    if (dbool == true) {
        document.body.classList.add("dark");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/moon.svg' alt='dark'>";
    } else {
        document.body.classList.remove("dark");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/sun.svg' alt='light'>";
    }
};

function darkMode() {
    if (dbool == false) {
        document.body.classList.add("dark");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/moon.svg' alt='dark'>";
        localStorage.setItem('isDark', true);
        dbool = true;
    } else {
        document.body.classList.remove("dark");
        document.getElementById("darkButton").innerHTML = "<img src='imgs/sun.svg' alt='light'>";
        localStorage.setItem('isDark', false);
        dbool = false;
    }
}