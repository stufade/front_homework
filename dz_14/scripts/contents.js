"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelector("#contents");

    contents.addEventListener("click", e => {
        const a = e.target.closest("a");
        if (!a)
            return;
        
        e.preventDefault();
        if (confirm("Do you want to follow the link?"))
            window.location.href = a.getAttribute("href");
    });
});