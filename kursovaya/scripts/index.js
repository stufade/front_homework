"use strict";

const gallery = document.querySelector('.book-gallery');

const addHandleClick = (id) => {
  const handleClick = (e) => {
    e.preventDefault();

    setCookie('currentBook', id);
    window.location.href = '/book.html';
  };

  const button = document.querySelector(`#button-${id}`);
  button.addEventListener('click', handleClick);
};

function createBook(book, id) {
  gallery.innerHTML += `
    <div class="book-card">
      <div class="book-image-wrapper">
        <img class="book-image" src="img/${book.imgSrc}">
      </div>
      <div class="book-content">
        <h4 class="book-title">
          ${book.author} - "${book.title}"
        </h4>
        <p class="book-description">
          ${book.shortDescription}
        </p>
        <button class="book-button button2" id="button-${id}">
          Подробнее
        </button>
      </div>
    </div>
  `;
};

books.forEach(createBook);
books.forEach((_, id) => addHandleClick(id))
