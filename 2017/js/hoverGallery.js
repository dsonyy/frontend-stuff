let ready = false;

setTimeout(() => {ready = true}, 500);

for (let thumb of document.getElementsByClassName("thumb")) {
    thumb.onmousemove = (e) => {
         let bg = document.body;
         if (e.clientX < window.innerWidth / 2) bg.style.backgroundPositionX = "calc(" + e.clientX + "px - 800px)";
         else bg.style.backgroundPositionX = "calc(" + e.clientX + "px + 100px)";
         bg.style.backgroundPositionY = "calc(" + e.clientY + "px - 300px)";
    };   
} 

function showPreview(e) {
    let src = e.style.backgroundImage;
    src = src.slice(5, src.length - 2)
    console.log(src)
    let bg = document.body;
    if (ready)  {
        bg.style.backgroundImage = "url(" + src + ")";
    }
    bg.style.backgroundRepeat = "no-repeat";
    let w = window.getComputedStyle(bg).width;
    let h = window.getComputedStyle(bg).height;
    if (w > h) bg.style.backgroundSize = "500px auto";
    else bg.style.backgroundSize = "auto 500px";
}

function hidePreview() {
    let bg = document.body;
    bg.style.backgroundImage = "none";
}