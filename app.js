var prevScrollPos = window.pageYOffset;
var prevScroll = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-95px";
    }
    prevScrollPos = currentScrollPos;
}
