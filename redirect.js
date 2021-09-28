const link = 'https://everinform.com/';
const urlHref = window.location.href;
const preland = urlHref.replace(/^\S*\.\w*\//, '').split('?')[0].replace(/\/$/, '').replace(/\//g, '_');

document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.tagName && event.target.tagName.toUpperCase() === 'A') {
        setTimeout(redirectOnTimeout, 2000);
    }
});

function redirectOnTimeout() {
    location.href = link + '?preland=' + preland;
}