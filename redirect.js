const btn = document.getElementById('btn');
const link = 'https://everinform.com/';
const urlHref = window.location.href;
const preland = urlHref.replace(/^\S*\.\w*\//, '').split('?')[0].replace(/\/$/, '').replace(/\//g, '_');

btn.addEventListener('click', (event) => {
    setTimeout(redirectOnTimeout, 2000);
});

function redirectOnTimeout() {
    location.href = link + 'preland=' +preland;
}