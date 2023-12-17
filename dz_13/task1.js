// Создание элементов и размещение картинки в центре
function centerImage() {
    const container = document.getElementById('container');
    const image = document.getElementById('image');

    // Получение размеров окна браузера
    const windowWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    ); // window.innerrWidth;
    const windowHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ); // window.innerHeight

    // Получение размеров картинки
    const containerBorder = 16;
    container.style.padding = containerBorder + 'px';
    container.style.backgroundColor = "red";
    const containerWidth = image.width + 2 * containerBorder;
    const containerHeight = image.height + 2 * containerBorder;
    
    // Расчет координат для размещения картинки в центре
    const centerX = (windowWidth - containerWidth) / 2;
    const centerY = (windowHeight - containerHeight) / 2;

    // Установка координат для позиционирования контейнера и картинки
    container.style.left = centerX + 'px';
    container.style.top = centerY + 'px';
    container.style.position = 'absolute';
    container.style.width = "fit-content";
}

// Обработчик клика для вывода координат
function handleClick(event) {
    const x = event.clientX;
    const y = event.clientY;

    // Вывод координат в консоль
    console.log('Координаты клика: X=' + x + ', Y=' + y);

    // Создание элемента для вывода координат на странице
    const coordinatesDisplay = document.createElement('div');
    coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
    coordinatesDisplay.style.position = 'absolute';
    coordinatesDisplay.style.top = y + 'px';
    coordinatesDisplay.style.left = x + 'px';
    coordinatesDisplay.style.background = '#fff';
    coordinatesDisplay.style.padding = '4px';
    coordinatesDisplay.style.border = '1px solid #000';

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
document.addEventListener('click', handleClick);

// Повторное центрирование картинки при изменении размеров окна
window.addEventListener('resize', centerImage);