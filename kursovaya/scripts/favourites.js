"use strict";

const gallery = document.querySelector('.cards');

const addHandleClick = (id) => {
  const handleInfoClick = (e) => {
    e.preventDefault();

    setCookie('currentBook', id);
    window.location.href = '/book.html';
  };

  const handleUnfavouriteClick = (e) => {
    e.preventDefault();

    deleteFavourite(id);
    fill();
  };

  const infoButton = document.querySelector(`#info-${id}`);
  infoButton.addEventListener('click', handleInfoClick);

  const unfavouriteButton = document.querySelector(`#unfavourite-${id}`);
  unfavouriteButton.addEventListener('click', handleUnfavouriteClick);
};

function createBook(book, id) {
  gallery.innerHTML += `
    <div class="card">
      <div class="img-wrapper">
        <img class="img" src="img/${book.imgSrc}">
      </div>
      <div class="content">
        <h3 class="title">
          ${book.title}
        </h3>
        <h4 class="author">
          ${book.author}
        </h4>
        <p class="description">
          ${book.shortDescription}
        </p>
        <div class="buttons-wrapper">
          <button class="button info" id="info-${id}">
            Подробнее
          </button>
          <button class="button unfavourite" id="unfavourite-${id}">
            Убрать из любимого
          </button>
        </div>
    </div>
  `;
};

function fill() {
  gallery.innerHTML = "";
  const favouritesIds = Array.from(getFavourites());

  const favouriteBooks = favouritesIds.map(id => ({ book: books[+id], id: +id }));

  favouriteBooks.forEach((favouriteBook) => createBook(favouriteBook.book, favouriteBook.id));
  favouriteBooks.forEach((favouriteBook) => addHandleClick(favouriteBook.id));
}

fill();
