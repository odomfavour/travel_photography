const navList = document.getElementById("navBar");
window.onscroll = function () {
    if (document.body.scrollTop < 0 || document.documentElement.scrollTop > 5) {
        navBar.classList.add("navTransparent");
        navBar.classList.remove("navBar");
    } else {
        navBar.classList.add("navBar");
        navBar.classList.remove("navTransparent");
    }
}