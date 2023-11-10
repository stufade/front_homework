"use strict";

const registrationBtn = document.querySelector(".registration-button");
const loginBtn = document.querySelector(".login-button");
const likeBtn = document.querySelector(".like-button");
const drawBtn = document.querySelector(".draw-button");

const registrationBtnOnClick = () => {
    const answer = prompt("Желаете пройти регистрацию на сайте?", "Да");
    answer == "Да" ? alert("Круто!") : alert("Попробуй еще раз");
};

const loginBtnOnClick = () => {
    const answer = prompt("Введите логин:", "Админ");
    if (answer == "Админ") {
        const password = prompt("Введите пароль:", "Я главный");
        switch (password) {
            case "Я главный":
                alert("Здравствуйте!");
                break;
            case null:
                alert("Отменено");
                break;
            default:
                alert("Неверный пароль");
        }
    }
    else if (!answer)
        alert("Отменено");
    else
        alert("Я вас не знаю");
};

const likeBtnOnClick = () => {
    likeBtn.classList.toggle("active");
};

let allowDraw = true;
const drawBtnOnClick = () => {
    const draw = e => {
        const img = document.createElement("i");
        img.className = "fa-solid fa-heart";
        img.style.width = "20px";
        img.style.position = "absolute";
        img.style.backgroundColor = "transparent";
        img.style.color = "#ed0b0b";
        img.style.left = e.pageX + "px";
        img.style.top = e.pageY + "px";
        drawBtn.append(img);
    }

    const stop = () => {
        document.removeEventListener("mousemove", draw);
        document.querySelectorAll(".draw-button .fa-heart").forEach(img => drawBtn.removeChild(img));
    }

    drawBtn.addEventListener("click", stop);

    if (allowDraw) {
        document.addEventListener("mousemove", draw);
        allowDraw = false;
    } else
        allowDraw = true;
};

registrationBtn.addEventListener("click", registrationBtnOnClick);
loginBtn.addEventListener("click", loginBtnOnClick);
likeBtn.addEventListener("click", likeBtnOnClick);
drawBtn.addEventListener("click", drawBtnOnClick);