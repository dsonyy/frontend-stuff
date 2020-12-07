let ready = false;
setTimeout(() => {ready = true}, 500);

for (let thumb of document.getElementsByClassName("thumb")) {
    thumb.onmousemove = (e) => {
         let body = document.body;
         let w = window.innerWidth / 3;
         if (e.clientX < window.innerWidth / 2) body.style.backgroundPositionX = "calc(" + e.layerX + "px - " + w + "px - 110px)";
         else body.style.backgroundPositionX = "calc(" + e.layerX + "px + 110px)";
         body.style.backgroundPositionY = "calc(" + e.layerY + "px - 250px)";
    };   
} 

function thumbToGallery(url) {
    url = url.split("/");
    return "url('img/gallery/" + url[url.length - 1].slice(0, -2) + "')";
}

function showPreview(e) {
    if (window.innerWidth < window.innerHeight || window.innerWidth < 900) return;
    let url = thumbToGallery(e.style.backgroundImage);
    let body = document.body;
    if (ready) body.style.backgroundImage = url;
    body.style.backgroundRepeat = "no-repeat";
    let w = window.innerWidth / 3;
    body.style.backgroundSize = w + "px auto";
}

function hidePreview() {
    let body = document.body;
    body.style.backgroundImage = "none";
}

function showSlideshow(e) {
    let url = thumbToGallery(e.style.backgroundImage);
    let slideshow = document.getElementById("slideshow");
    slideshow.style.display = "inline";
    slideshow.style.backgroundImage = url;
    slideshow.style.backgroundSize = "contain";
    let body = document.body;
    body.style.overflow = "hidden";
}

function hideSlideshow() {
    let slideshow = document.getElementById("slideshow");
    slideshow.style.display = "none";
    let body = document.body;
    body.style.overflow = "auto";
}