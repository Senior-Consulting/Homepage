function slideBox(idx) {
    var gallery = document.getElementById("gallery");
    gallery.parentNode.style.display = "block";

    nslider.init(idx);

    var fsBtn = document.getElementById("fs-btn");
    fsBtn.click();
}

function fsIconClick(isFullscreen) { //fsIconClick is the default event handler of the fullscreen button
    var gallery = document.getElementById("gallery");
    gallery.parentNode.style.display = isFullscreen ? "block" : "none";
}

