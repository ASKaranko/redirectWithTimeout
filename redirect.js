document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('btn');
    btn.addEventListener('click', (event) => {
        setTimeout(redirectOnTimeout, 2000);
    });

    function redirectOnTimeout() {
        location.href = "https://everinform.com/?lang=ro&currency=usd&source_id=18&source_site_id=&source_campaign_id=140718&source_teaser_id=";
    }
  
});