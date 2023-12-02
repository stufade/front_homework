function genStrCaptcha() {
    return Math.random().toString(36).substring(2, 8);
}


const infoForm = document.getElementById('info-form');
const resetInfoFormButton = document.getElementById('reset-info-form');
const submitButton = document.getElementById('submit-button');
const strCaptchaWrapper = document.getElementById('str-captcha');
const strCaptchaSpan = document.getElementById('str-captcha-span');
const strCaptchaInput = document.getElementById('str-captcha-input');
const strCaptchaButton = document.getElementById('str-captcha-button');
const numCaptchaWrapper = document.getElementById('num-captcha');
const numCaptchaSpan = document.getElementById('num-captcha-span');
const numCaptchaInput = document.getElementById('num-captcha-input');
const numCaptchaButton = document.getElementById('num-captcha-button');

resetInfoFormButton.onclick = () => infoForm.reset();

strCaptchaButton.addEventListener('click', function handleStrCaptcha() {
    if (!strCaptchaInput.value) {
        alert('Пустой ввод!');
        return;
    }

    strCaptchaWrapper.classList.add('hidden');
    strCaptchaButton.removeEventListener('click', handleStrCaptcha);
    if (strCaptchaInput.value === strCaptchaValue) {
        alert('Капча введена верно!');
        submitButton.disabled = false;
    } else {
        alert('Капча введена неверно.');
        numCaptchaWrapper.classList.remove('hidden');
    }
});

numCaptchaButton.addEventListener('click', function handleNumCaptcha() {
    if (!numCaptchaInput.value) {
        alert('Пустой ввод!');
        return;
    }

    numCaptchaWrapper.classList.add('hidden');
    numCaptchaButton.removeEventListener('click', handleNumCaptcha);
    if (numCaptchaInput.value == numCaptchaSum) {
        alert('Капча введена верно!');
        submitButton.disabled = false;
    } else {
        alert('Капча введена неверно.');
    }
});

submitButton.disabled = true;
const strCaptchaValue = genStrCaptcha();
strCaptchaSpan.textContent = strCaptchaValue;
const a = Math.floor(Math.random() * 100), b = Math.floor(Math.random() * 100);
const numCaptchaSum = a + b;
numCaptchaSpan.textContent = `${a} ${b}`;