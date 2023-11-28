"use strict";

const nameButton = document.querySelector('.name.button');
const passwordButton = document.querySelector('.button.password');
const passwordField = document.querySelector('#password');
const nameField = document.querySelector('#username');

const gallery = document.querySelector('.cards');

const handleNameClick = () => {
  setCookie('username', nameField.value);
  changeName();
}

const handlePasswordClick = () => {
  setCookie('password', stringToHash(passwordField.value));
}

nameButton.addEventListener('click', handleNameClick);
passwordButton.addEventListener('click', handlePasswordClick);

function createBook(book, id) {
  gallery.innerHTML += `
    <div class="card">
      <div class="img-wrapper">
          <img class="img" src="img/${book.imgSrc}">
      </div>
      <div class="content">
          <div class="title">
              ${book.title} - ${book.author}
          </div>
          <button class="unblock button" id="unblock-${id}">
              Разблокировать
          </button>
      </div>
    </div>
  `;
}

function addHandleClick(id) {
  const handleUnblockClick = (e) => {
    e.preventDefault();

    deleteBlocked(id);
    fill();
  };

  const unblockButton = document.querySelector(`#unblock-${id}`);
  unblockButton.addEventListener('click', handleUnblockClick);
};

function fill() {
  gallery.innerHTML = "";
  const blockedIds = Array.from(getBlocked());

  let blockedBooks = blockedIds.map(id => ({ book: books[+id], id: +id }));

  blockedBooks.forEach((blockedBook) => createBook(blockedBook.book, blockedBook.id));
  blockedBooks.forEach((blockedBook) => addHandleClick(blockedBook.id));
}

fill();
