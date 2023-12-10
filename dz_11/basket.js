Array.prototype.remove = function (value) {
    const index = this.indexOf(value);
    if (index !== -1) {
        this.splice(index, 1);
    }
}

function b(str) {
    return str ? `basket__${str}` : 'basket';
}

function item_b(str) {
    return str ? `item__${str}` : 'item';
}

function createImg(src, width, height) {
    const img = document.createElement('img');
    img.src = src;
    img.width = width;
    img.height = height;
    return img;
}

const basket = document.querySelector('#' + b());
const addButton = basket.querySelector('.' + b('add-button'));
const clearButton = basket.querySelector('.' + b('clear-button'));
const clearButtonImg = basket.querySelector('.' + b('clear-button-img'));
const total = basket.querySelector('.' + b('total'));
const sortAscButton = basket.querySelector('.' + b('sort-asc'));
const sortDescButton = basket.querySelector('.' + b('sort-desc'));
const filterButton = basket.querySelector('.' + b('filter'));

const items = [];

function setItems(newItems) {
    for (const item of [...items]) {
        removeItem(item);
    }

    for (const item of newItems) {
        basket.insertBefore(item, basket.firstElementChild.nextElementSibling);
        items.push(item);
    }

    updateTotal();
}

function removeItem(item) {
    items.remove(item);
    item.remove();
}

function addItem(title, price) {
    const item = document.createElement('div');
    item.className = item_b();
    basket.insertBefore(item, basket.firstElementChild.nextElementSibling);

    const itemInfo = document.createElement('div');
    itemInfo.className = item_b('info');
    itemInfo.innerHTML = 
        `<span class=${item_b('title')}>${title}</span>` +
        `<span class=${item_b('price')}>${price}₽</span>`;
    item.appendChild(itemInfo);

    const controls = document.createElement('div');
    controls.className = item_b('controls');
    item.appendChild(controls);

    const current = document.createElement('span');
    current.className = item_b('quantity') + '-current';
    current.textContent = 1;
    controls.appendChild(current);

    const changeQuantity = document.createElement('div');
    changeQuantity.className = item_b('change-quantity');
    controls.appendChild(changeQuantity);

    const add = document.createElement('button');
    add.className = item_b('change-quantity') + '-add';
    add.appendChild(createImg('img/arrow-up.svg', 32, 32));
    changeQuantity.appendChild(add);

    add.addEventListener('click', () => changeItemQuantity(item, price, +1));

    const sub = document.createElement('button');
    sub.className = item_b('change-quantity') + '-sub';
    sub.appendChild(createImg('img/arrow-down.svg', 32, 32));
    changeQuantity.appendChild(sub);

    sub.addEventListener('click', () => {
        if (parseInt(current.textContent) > 1) {
            changeItemQuantity(item, price, -1);
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = item_b('delete-button');
    deleteButton.appendChild(createImg('img/delete.svg', 32, 32));
    controls.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        removeItem(item);
        updateTotal();
    });

    items.push(item);
}

function changeItemQuantity(item, price, delta) {
    const current = item.querySelector('.' + item_b('quantity') + '-current');
    current.textContent = parseInt(current.textContent) + delta;

    const itemPrice = item.querySelector('.' + item_b('price'));
    itemPrice.textContent = `${getItemPrice(item) + price * delta}₽`;
    updateTotal();
}

function getItemPrice(item) {
    const price = item.querySelector('.' + item_b('price'));
    return parseFloat(price.textContent.substring(0, price.textContent.length - 1));
}

function updateTotal() {
    let sum = 0;
    for (const item of items) {
        sum += parseFloat(item.querySelector('.' + item_b('price')).textContent);
    }

    total.textContent = `Общая сумма: ${sum}₽`;
}

addButton.addEventListener('click', () => {
    const title = prompt('Товар:');
    if (!title) {
        return;
    }

    const price = parseFloat(prompt('Цена:'));
    if (isNaN(price)) {
        return;
    }

    addItem(title, price);
    updateTotal();  
});

clearButton.addEventListener('click', () => setItems([]));

sortAscButton.addEventListener('click', () => {
    setItems([...items.sort((item1, item2) => getItemPrice(item1) - getItemPrice(item2))]);
});

sortDescButton.addEventListener('click', () => {
    setItems([...items.sort((item1, item2) => getItemPrice(item2) - getItemPrice(item1))]);
});

let unfiltered = [];
filterButton.addEventListener('click', () => {
    if (unfiltered.length) {
        setItems([...unfiltered]);
        unfiltered = [];
    } else {
        unfiltered = [...items];

        const lower = parseFloat(prompt('Нижняя граница:'));
        if (isNaN(lower)) {
            return;
        }

        const upper = parseFloat(prompt('Верхняя граница:'));
        if (isNaN(upper)) {
            return;
        }

        setItems([...items.filter((item) => {
            const price = getItemPrice(item);
            return price >= lower && price <= upper;
        })]);
    }
});