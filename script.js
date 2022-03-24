let layer1 = document.getElementById("layer1")
scroll = window.pageYOffset;
document.addEventListener("scroll", function (e) {
    let offset = window.pageXOffset;

    scroll = offset;
    layer1.style.width = (100 + scroll / 5) + "%";
});

let layer2 = document.getElementById("layer2")
scroll = window.pageYOffset;
document.addEventListener("scroll", function (e) {
    let offset = window.pageXOffset;

    scroll = offset;
    layer2.style.width = scroll / 50 + "%"
});



let layer1 = document.getElementById("layer1")
scroll = window.pageYOffset;
document.addEventListener("scroll", function (e) {
    let offset = window.pageXOffset;

    scroll = offset;
    layer1.style.width = (100 + scroll / 5) + "%";
});

let text = document.getElementById("text")
scroll = window.pageYOffset;
document.addEventListener("scroll", function (e) {
    let offset = window.pageXOffset;

    scroll = offset;
    text.style.top = -scroll / 20 + "%"
});