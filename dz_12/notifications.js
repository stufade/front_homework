const wrapper = document.getElementById('notifications-wrapper');
const center = document.getElementById('notifications-center');
const countSpan = center.querySelector('.notifications__count-badge');

let count = 0;

function notify(text) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = text;
    wrapper.appendChild(notification);
    updateCount(+1);

    setTimeout(() => {
        notification.remove();
        updateCount(-1);
    }, 1500);
}

function updateCount(delta) {
    count += delta;
    countSpan.textContent = count;
}

function setConditionalInterval(func, period) {
    let interval;

    return function updateInterval(delay = 0) {
        if (!delay) {
            interval = setInterval(func, period);
        } else {
            clearInterval(interval);
            setTimeout(() => updateInterval(), delay);
        }
    }
}

center.addEventListener('click', () => spamNotifications(10000));

const spamNotifications = setConditionalInterval(() => notify('Новое уведомление!'), 3000);
spamNotifications();