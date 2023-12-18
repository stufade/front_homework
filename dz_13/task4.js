let height = 1000;

function createDiv() {
  const div = document.createElement("div");
  div.style.height = 500 + "px";
  div.textContent = `Высота: ${height + 500}px`;
  return div;
}

function handleScroll() {
  const scrollY = window.scrollY;
  const currentPosition = scrollY + window.innerHeight;
  console.log(currentPosition, height);
  if (currentPosition > height) {
    const newDiv = createDiv();
    document.body.appendChild(newDiv);
    height += 500;
  }
}

window.addEventListener("scroll", handleScroll);
