const aTags = document.getElementsByTagName('a');
const link = 'https://everinform.com/';
const urlHref = window.location.href;
const preland = urlHref.replace(/^\S*\.\w*\//, '').split('?')[0].replace(/\/$/, '').replace(/\//g, '_');

var arrayTagsLength = aTags.length;

for(var i=0; i < arrayTagsLength; i++)
{
   aTags[i].target = "_blank";
}

document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.tagName && event.target.tagName.toUpperCase() === 'A') {
        setTimeout(redirectOnTimeout, 2000);
    }
});

function redirectOnTimeout() {
    location.href = link + '?preland=' + preland;
}