const layerExplosion = document.createElement("div");
layerExplosion.style.position = "absolute";
layerExplosion.style.display = "flex";
layerExplosion.style.textAlign = "center";
layerExplosion.style.justifyContent = "center";
layerExplosion.style.top = 50 + "rem";
layerExplosion.style.left = 50 + "rem";
const explosion = document.createElement("img");
explosion.src = "explosion.webp";
explosion.style.transform = "scale(2)";
layerExplosion.appendChild(explosion);

let reachedBottom = false;

window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let container = this.document.querySelector(".parallax-container");
  let layerLeft = document.querySelector(".parallax-layer-left");
  let layerRight = document.querySelector(".parallax-layer-right");

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (reachedBottom) {
    layerLeft.style.display = "inline-block";
    layerRight.style.display = "inline-block";
    container.lastChild.remove();
    reachedBottom = false;
  }

  if (scrolled > 0) {
    if (scrolled + windowHeight >= documentHeight) {
      layerLeft.style.display = "none";
      layerRight.style.display = "none";
      container.appendChild(layerExplosion);
      reachedBottom = true;
      return;
    }

    layerLeft.style.transform = `translateX(${scrolled}px) translateY(${scrolled}px)`;
    layerRight.style.transform = `translateX(-${scrolled}px) translateY(${scrolled}px)`;
  } else {
    layerLeft.style.transform = `translateX(-${scrolled}px) translateY(-${scrolled}px)`;
    layerRight.style.transform = `translateX(${scrolled}px) translateY(-${scrolled}px)`;
  }
});
