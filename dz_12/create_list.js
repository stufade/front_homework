const listsWrapper = document.getElementById('create_list-wrapper');
const addButton = listsWrapper.querySelector('.create_list__add');

function addList() {
    const list = document.createElement('ul');
    list.className = 'create_list__list';
    listsWrapper.appendChild(list);

    while (true) {
        const itemText = prompt('Текст следующего элемента:');
        if (!itemText) {
            break;
        }

        const item = document.createElement('li');
        item.textContent = itemText;
        list.appendChild(item);
    }
}

addButton.addEventListener('click', () => addList());