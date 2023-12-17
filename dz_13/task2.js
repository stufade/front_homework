const wrapper = document.getElementById('notifications-wrapper');
const center = document.getElementById('notifications-center');
const countSpan = center.querySelector('.notifications__count-badge');

let count = 0;

function showNotification(option) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = option;

    const closeButtonBlock = document.createElement('div');
    closeButtonBlock.className = 'close-button-block';
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.textContent = '×'

    closeButtonBlock.appendChild(closeButton);
    notification.appendChild(closeButtonBlock);
    wrapper.appendChild(notification);
    countSpan.textContent = ++count;
}

function setConditionalInterval(func, period) {
    let interval;

    return function updateInterval(delay = 0) {
        if (delay == 0) {
            interval = setInterval(func, period);
        } else {
            clearInterval(interval);
            setTimeout(() => updateInterval(), delay);
        }
    }
}

wrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('close-button')) {
        const notification = event.target.closest('.notification');
        if (notification) {
            notification.remove();
            countSpan.textContent = --count;
        }
    }
});


const spamNotifications = setConditionalInterval(() => showNotification('Новое уведомление!'), 3000);
center.addEventListener('click', () => spamNotifications(10000));
spamNotifications();