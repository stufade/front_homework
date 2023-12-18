"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousedown", (e) => {
    const item = e.target.closest(".item")?.cloneNode(true);
    if (!item || e.button) return;

    const offset = [
      e.clientX - e.target.closest(".item").getBoundingClientRect().left,
      e.clientY - e.target.closest(".item").getBoundingClientRect().top,
    ];

    let storage;

    const moveItem = (pageX, pageY) => {
      item.style.left = `${pageX - offset[0]}px`;
      item.style.top = `${pageY - offset[1]}px`;
    };

    const onMouseMove = (e) => {
      moveItem(e.pageX, e.pageY);
      item.style.display = "none";
      storage = document
        .elementFromPoint(e.clientX, e.clientY)
        ?.closest(".storage");
      item.style.display = "initial";
      item.style.opacity = 0.7;
      if (storage) item.style.opacity = 1;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      item.removeEventListener("mouseup", onMouseUp);
      item.remove();
      if (!storage) return;

      const storageCnt = storage.querySelector("span");
      const itemPrice = item.querySelector("p");
      const totalPrice = document.querySelector("#cart > p b");

      storageCnt.style.visibility = "visible";
      storageCnt.textContent = parseInt(storageCnt.textContent) + 1;
      totalPrice.textContent =
        parseFloat(totalPrice.textContent) + parseFloat(itemPrice.textContent);
    };

    e.preventDefault();
    item.style.position = "absolute";
    item.style.zIndex = 100;
    document.body.append(item);
    moveItem(e.pageX, e.pageY);

    document.addEventListener("mousemove", onMouseMove);
    item.addEventListener("mouseup", onMouseUp);
  });
});
