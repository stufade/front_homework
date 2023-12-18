function centerImage() {
  const container = document.getElementById("container");
  const image = document.getElementById("image");

  const windowWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
  const windowHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const containerBorder = 16;
  container.style.padding = containerBorder + "px";
  container.style.backgroundColor = "red";
  const containerWidth = image.width + 2 * containerBorder;
  const containerHeight = image.height + 2 * containerBorder;

  const centerX = (windowWidth - containerWidth) / 2;
  const centerY = (windowHeight - containerHeight) / 2;

  container.style.left = centerX + "px";
  container.style.top = centerY + "px";
  container.style.position = "absolute";
  container.style.width = "fit-content";
}

function handleClick(event) {
  const x = event.clientX;
  const y = event.clientY;

  const coordinatesDisplay = document.createElement("div");
  coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
  coordinatesDisplay.style.position = "absolute";
  coordinatesDisplay.style.top = y + "px";
  coordinatesDisplay.style.left = x + "px";
  coordinatesDisplay.style.background = "#fff";
  coordinatesDisplay.style.padding = "4px";
  coordinatesDisplay.style.border = "1px solid #000";

  // Добавление элемента с координатами на страницу
  document.body.appendChild(coordinatesDisplay);

  // Удаление элемента через 2 секунды
  setTimeout(() => {
    document.body.removeChild(coordinatesDisplay);
  }, 2000);
}

// Вызов функции для центрирования картинки
centerImage();

// Добавление обработчика события клика
document.addEventListener("click", handleClick);

// Повторное центрирование картинки при изменении размеров окна
window.addEventListener("resize", centerImage);
