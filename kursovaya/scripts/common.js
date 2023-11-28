"use strict";

function stringToHash(string) {
  let hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return hash;
}

function setCookie(cname, cvalue, exdays = 30) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getBlocked() {
  const blockedString = getCookie('blocked');
  const blocked = new Set(blockedString ? JSON.parse(blockedString) : []);

  return blocked;
}

function addBlocked(id) {
  const blocked = getBlocked();

  blocked.add(id);

  setCookie('blocked', JSON.stringify(Array.from(blocked)));
}

function deleteBlocked(id) {
  const blocked = getBlocked();

  blocked.delete(String(id));
  setCookie('blocked', JSON.stringify(Array.from(blocked)));
}

function getFavourites() {
  const favouritesString = getCookie('favourites');
  const favourites = new Set(favouritesString ? JSON.parse(favouritesString) : []);

  return favourites;
}

function addFavourite(id) {
  const favourites = getFavourites();

  favourites.add(id);

  setCookie('favourites', JSON.stringify(Array.from(favourites)));
}

function deleteFavourite(id) {
  const favourites = getFavourites();

  favourites.delete(String(id));

  setCookie('favourites', JSON.stringify(Array.from(favourites)));
}

const account = document.querySelector('#account');

function changeName() {
  account.textContent = getCookie('username') || 'Аноним';
}

changeName();

const books = [
  {
    author: "Джордж Оруэлл",
    title: "1984",
    shortDescription: "Роман посвящён последствиям тоталитаризма, массового наблюдения и промывания мозгов людей в тоталитарном обществе.",
    imgSrc: '1984.jpg',
    fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit commodi est culpa facere magni ducimus quia amet quos porro, doloribus voluptatem nesciunt at, deserunt laboriosam iusto dignissimos optio accusamus soluta."
  },
  {
    author: "Евгений Замятин",
    title: "Мы",
    shortDescription: "Фантастический роман-антиутопия Евгения Замятина с элементами сатиры, написанный в 1920 году. Действие разворачивается приблизительно в тридцать втором веке.",
    imgSrc: 'мы.jpg',
    fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit commodi est culpa facere magni ducimus quia amet quos porro, doloribus voluptatem nesciunt at, deserunt laboriosam iusto dignissimos optio accusamus soluta."
  },
  {
    author: "Джордж Оруэлл",
    title: "Скотный двор",
    shortDescription: "В повести изображена эволюция общества животных, изгнавших со скотного двора его предыдущего владельца, жестокого мистера Джонса, от безграничной свободы к диктатуре свиньи по кличке Наполеон.",
    imgSrc: 'скотный двор.jpg',
    fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit commodi est culpa facere magni ducimus quia amet quos porro, doloribus voluptatem nesciunt at, deserunt laboriosam iusto dignissimos optio accusamus soluta."
  },
];
