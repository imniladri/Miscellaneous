window.addEventListener("load", () => {
    var svg = document.querySelector("svg");
    setTimeout(() => {
        svg.setAttribute("class", "loaded");
    }, 1000);
});
