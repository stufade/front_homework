"use strict";

const main = document.querySelector(".main");

const bookId = getCookie('currentBook');
const currentBook = books[bookId];

main.innerHTML = `
  <div class="img-wrapper">
    <img class="img" src="img/${currentBook.imgSrc}">
  </div>
  <div class="text-wrapper">
    <h2 class="title">
      ${currentBook.title}
    </h2>
    <h3 class="author">
      ${currentBook.author}
    </h3>
    <p class="description">
      ${currentBook.fullDescription}
    </p>
    <div class="buttons">
    <button class="button favourite">
      В избранное
    </button>
    <button class="button hate">
      В черный список
    </button>
    </div>
  </div>
`;

const favouriteButton = document.querySelector('.favourite');
favouriteButton.addEventListener('click', () => {
  addFavourite(bookId);
});
