"use strict";

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousedown", e => {
        let grip = e.target;
        const slider = grip.closest(".slider");
        if (!slider || e.button)
            return;

        if (grip.tagName != "SPAN") {
            grip = slider.querySelector("span");
            return grip.style.left = `${e.pageX - slider.getBoundingClientRect().left - grip.offsetWidth / 2}px`;
        }

        const onMouseMove = e => {
            let offset = e.pageX - slider.getBoundingClientRect().left - grip.offsetWidth / 2;
            offset = max(0, offset);
            offset = min(slider.clientWidth - grip.offsetWidth, offset);
            grip.style.left = `${offset}px`;
        };

        const onMouseUp = () => {
            grip.style.filter = "initial";
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        grip.style.filter = "brightness(80%)";
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });
});