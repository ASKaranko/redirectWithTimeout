const btn = document.getElementById('btn');
const domain = 'https://everinform.com/';
const tail = '?lang=ro&currency=usd&source_id=18&source_site_id=&source_campaign_id=140718&source_teaser_id=';
const urlHref = window.location.href;
const folder = urlHref.replace(/^\S*\.\w{2,4}\//ig, '').split('?')[0].replace(/\/$/, '').replace(/\//g, '_');

btn.addEventListener('click', (event) => {
    setTimeout(redirectOnTimeout, 2000);
});

function redirectOnTimeout() {
    location.href = domain + folder + tail;
}