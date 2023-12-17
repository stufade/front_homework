"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const mainImg = document.querySelector("#gallery > img");

    gallery.addEventListener("click", e => {
        const img = e.target;
        if (img.tagName != "IMG")
            return;
        
        mainImg.setAttribute("src", img.getAttribute("src"));
    });
});