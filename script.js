var sideWidth = document.querySelector(".side").offsetWidth


setInterval(function() {
    var width = window.innerWidth;
    var wString = "calc(95% - " + sideWidth.toString() + "px)";

    if (width < 865) {document.querySelector(".side").style.display = "none"; document.querySelector(".content[role=main]").style.width = "95%"} 
    else {document.querySelector(".side").style.display = "block"; document.querySelector(".content[role=main]").style.width = wString};
}, 1000 )