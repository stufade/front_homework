"use strict";

let isRegister = true;

const changeButton = document.querySelector('.change');
const submitButton = document.querySelector('.button');
const title = document.querySelector('h2');
const nameField = document.querySelector('#username');
const mailField = document.querySelector('#email');
const mailFieldInputGroup = document.querySelector('.input-group.email');
const passwordField = document.querySelector('#password');
const passwordConfirmField = document.querySelector('#confirm_password');
const passwordConfirmFieldInputGroup = document.querySelector('.input-group.confirm_password');

changeButton.addEventListener('click', () => {
  if (isRegister) {
    changeButton.textContent = 'У меня ещё нет аккаунта';
    submitButton.textContent = 'Войти';
    title.textContent = 'Вход';
  } else {
    changeButton.textContent = 'У меня уже есть аккаунт';
    submitButton.textContent = 'Зарегистрироваться';
    title.textContent = 'Регистрация';
  }

  mailFieldInputGroup.classList.toggle('hidden');
  passwordConfirmFieldInputGroup.classList.toggle('hidden');
  isRegister = !isRegister;
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (isRegister) {
    if (passwordField.value !== passwordConfirmField.value) {
      alert('Пароли не сходятся');
      return;
    }
    setCookie('username', nameField.value);
    setCookie('password', stringToHash(passwordField.value));
  } else {
    const password = getCookie('password');
    const username = getCookie('username');

    console.log(stringToHash(passwordField.value), password)
    
    if (nameField.value !== username || stringToHash(passwordField.value) != password) {
      alert('Неправильный логин или пароль');
      return;
    }
  }

  window.location.href = '/';
});
