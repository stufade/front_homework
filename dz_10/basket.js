function Basket(startingValue = 0) {
    this.value = startingValue;

    this.read = () => {
        let add = prompt('Сколько вы хотите добавить?');
        if (!add) {
            alert('Пустой ввод!');
            return;
        }

        add = parseInt(add);
        if (isNaN(add)) {
            alert('Введите число!')
            return;
        }

        this.value += add;
        basketValue.textContent = this.value;
    }
}

const basketValue = document.getElementById('basket-value');
const baskedAddButton = document.getElementById('basket-add-button');
const STARTING_VALUE = 0;

const basket = new Basket(STARTING_VALUE);
basketValue.textContent = STARTING_VALUE;

baskedAddButton.addEventListener('click', () => basket.read()); 