"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const [btn1, btn2] = [...document.querySelectorAll("#animations button")];
    
    btn1.addEventListener("click", () => {
        const start = performance.now();
        const duration = 1000;
        
        requestAnimationFrame(function animate(time) {
            let progress = (time - start) / duration;
            progress = progress > 1 ? 1 : progress;
            btn1.style.transform = `rotateZ(${progress * 360}deg)`;
            if (progress < 1)
                requestAnimationFrame(animate);
        });
    });

    btn2.addEventListener("click", () => {
        const start = performance.now();
        const duration = 2000;
        const distance = document.documentElement.clientWidth - btn2.offsetWidth - btn2.getBoundingClientRect().left;

        requestAnimationFrame(function animate(time) {
            let progress = (time - start) / duration;
            progress = progress > 0.5 ? 1 - progress : progress;
            progress = progress < 0 ? 0 : progress
            btn2.style.transform = `translateX(${2 * progress * distance}px)`;
            if (progress >= 0)
                requestAnimationFrame(animate);
        });
    });
});