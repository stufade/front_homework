"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const selectionList = document.querySelector("#selection-list");

  selectionList.addEventListener("mousedown", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    e.preventDefault();
  });

  selectionList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    li.classList.toggle("selected");
    if (e.ctrlKey || e.metaKey) return;

    [...document.querySelectorAll("#selection-list li")]
      .filter((el) => el != li)
      .forEach((el) => el.classList.remove("selected"));
  });
});
